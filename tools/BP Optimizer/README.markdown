# Blueprint → Token Optimizer

A lightweight HTML tool that compresses Unreal Engine Blueprint text into a compact, AI-friendly format. Perfect for feeding your visual Blueprint logic to an LLM for C++ conversion.

## Why?

Unreal Blueprint copy-paste text is **bloated**:
- 32-character GUIDs for every pin connection
- Hundreds of default-false boolean flags
- Redundant property containers
- Position metadata

A typical Blueprint function can be **30KB+ of text** — most of it noise. This tool strips the fat and produces a **readable, token-efficient format** that captures all the logic an AI needs to generate C++ code.

### Example

**Input (raw Blueprint):** 33,150 characters  
**Output (optimized):** 1,962 characters  
**Reduction: 94.1%**

The optimizer produces a graph-style format that's both human-readable and easy for AI to parse.

---

## Quick Start

1. **Open** `bp_optimizer.html` in any modern web browser
2. **Paste** your Blueprint text (copy-paste from Unreal Editor) into the left panel
3. **Click** "Optimize ▶" 
4. **Copy** the output from the right panel
5. **Paste** into your favorite LLM with a prompt like:

```
Convert this Blueprint function to C++. 
- → = output pin, ← = input pin
- ⇒ = connection/wire
- [NodeID] format shows node identity
```

---

## How It Works

### Parsing
The tool reads standard Unreal Blueprint text format:
```
Begin Object Class=/Script/BlueprintGraph.K2Node_CallFunction Name="K2Node_CallFunction_14"
   FunctionReference=(MemberParent="...",MemberName="IsCrouching")
   NodePosX=503
   NodePosY=345
   CustomProperties Pin (PinId=..., PinName="self", ...)
End Object
```

### Optimization Passes

1. **GUID Elimination** — Replaces 32-char pin GUIDs with readable node/pin references
   - `A24E3CDB6F0641EFB95C2C741F9962A9` → `Get5.execute`

2. **ID Shortening** — Converts long node names to meaningful aliases
   - `K2Node_FunctionEntry_0` → `Entry1`
   - `K2Node_VariableGet_4` → `Get4`
   - `K2Node_CallFunction_14` → `Call3`

3. **Noise Removal** — Strips default-false flags and empty metadata
   - Removes: `bIsReference=False`, `bIsConst=False`, `PinSubCategory=""`
   - Keeps: meaningful defaults like `DefaultValue="Stand"`

4. **Type Compression** — Shortens type information
   - `PinType.PinCategory="object" PinType.PinSubCategoryObject="/Script/CoreUObject.Class'/Script/Mover.CharacterMoverComponent'"` 
   - → `object<CharacterMoverComponent>`

5. **Connection Rewriting** — Converts GUID-based links to human-readable paths
   - `LinkedTo=(K2Node_VariableGet_4 A24E3CDB6F0641EFB95C2C741F9962A9,)`
   - → `⇒ Get5.execute`

### Output Format

Each node becomes a compact block:

```
[NodeID] NodeType [Description] [Flags]
  ← PinName: type = default  ⇒ Target.pin
  → PinName: type  ⇒ Target.pin
```

**Legend:**
- `[ID]` — Short node identifier
- `←` — Input pin
- `→` — Output pin
- `type` — Pin type (e.g., `bool`, `struct<MyStruct>`, `object<MyClass>`)
- `= value` — Default value (if set)
- `⇒ target` — Wire connection (which node/pin this links to)
- `[flags]` — Hidden, orphaned, or other metadata

**Node Type Aliases:**
- `Entry` — Function entry point
- `Return` — Function return
- `Call` — Function call
- `Get` — Variable getter
- `Set` — Variable setter
- `Make` — Struct construction
- `Break` — Struct decomposition
- `Select` — Branching/multiplexing
- `Branch` — If-then-else
- `Seq` — Execution sequence
- `Cast` — Dynamic cast

---

## Options

### Drop Positions
When **checked** (default): removes node X/Y coordinates from output, saving ~5–10% space.

When **unchecked**: includes `@(x,y)` positional hints for recreating the Blueprint layout.

### Drop Defaults
When **checked** (default): removes default-false flags and empty properties, dramatically reducing size.

When **unchecked**: keeps all properties for completeness (rarely needed).

### Short IDs
When **checked** (default): uses short aliases like `Get4`, `Call3`.

When **unchecked**: uses full original node names for debugging/reference matching.

---

## Real-World Example

### Input
```
Begin Object Class=/Script/BlueprintGraph.K2Node_FunctionEntry Name="K2Node_FunctionEntry_0"
   FunctionReference=(MemberParent="/Script/CoreUObject.Class'/Script/CharacterCustomizer.BPI_SandboxCharacterPawn'",MemberName="Get_PropertiesForCamera")
   NodePosX=-784
   NodePosY=-48
   NodeGuid=B5DA3D8B51104D72AA384976397DAB48
   CustomProperties Pin (PinId=9410805505654A8BAE78CC50B68A7BE7,PinName="then",Direction="EGPD_Output",PinType.PinCategory="exec",...LinkedTo=(K2Node_VariableGet_4 A24E3CDB6F0641EFB95C2C741F9962A9,),...)
End Object
Begin Object Class=/Script/BlueprintGraph.K2Node_VariableGet Name="K2Node_VariableGet_4"
   VariableReference=(MemberName="Mover",bSelfContext=True)
   NodePosX=-467
   NodePosY=-48
   ...
End Object
```

### Output
```
# Function: Get_PropertiesForCamera
# Parent: BPI_SandboxCharacterPawn

[Entry1] Entry Get_PropertiesForCamera
  → then: exec  ⇒ Get5.execute

[Get5] Get Mover
  ← execute: exec  ⇒ Entry1.then
  → then: exec  ⇒ Return2.execute
  → else: exec
  → Mover: object<MoverExtended>
```

An AI reads this and immediately understands:
- Function entry connects to a Mover variable getter
- The getter validates, branches into a then/else
- The "then" path proceeds to return the result

---

## Using the Output

### For AI Conversion

**Good prompt:**
```
Convert this Blueprint to C++. Format:
- [NodeID] = node identity (ignore the ID, just understand the operation)
- ← = input pin, → = output pin
- ⇒ = connection to another node
- struct<TypeName> = a struct, byte<EnumName> = an enum

[Output here]

Output C++ code that replicates this logic.
```

**Better prompt (give context):**
```
I'm converting a Blueprint to C++. This is a camera property function that reads 
character state and returns camera configuration based on stance/rotation mode.

The format is:
- Each [NodeID] is a function/operation node
- ← pins are inputs, → pins are outputs  
- ⇒ shows data flow between nodes
- Variables like CPP_TwinStickMode are class member variables

[Output here]

Generate C++ that implements this logic.
```

### Limitations

The tool does **not**:
- Handle Blueprint macros (yet)
- Compress custom Blueprint nodes beyond recognizing them
- Optimize event/delegate references
- Collapse sequences of trivial operations automatically

It **does handle well**:
- Branches and selections
- Function calls and variable gets/sets
- Struct construction/decomposition
- Pure functions and cast nodes
- Multi-pin nodes with enum-driven selection

---

## Tips & Tricks

### Cleaning Up Orphaned Pins
If your Blueprint has broken/unlinked pins, they'll show as `[orphan]` in the output. You can manually remove these lines or let the AI ignore them with:

```
Ignore any pins marked [orphan] — they represent broken connections.
```

### Tracing Execution Flow
Look for pins without `⇒` targets — these are often endpoints (returns, unconnected outputs).

Lines with `← execute: exec` are the start of a branch.

### Size Optimization Trade-offs

- **Keep positions** (`dropPositions=off`) → bigger output, but useful if you might recreate the Blueprint
- **Keep all defaults** (`dropDefaults=off`) → bigger output, rarely helpful for C++ conversion
- **Long IDs** (`shortIds=off`) → match original node names 1:1 if you need to debug against the original .uasset

---

## Troubleshooting

### "No Blueprint nodes found"

Make sure you copied the entire Blueprint function. Look for:
- At least one `Begin Object ... End Object` block
- Copy from the Blueprint editor using `Ctrl+C` on the full graph, or select all and copy text

### Output looks garbled

This usually means the parser hit a formatting edge case. Try:
- Paste the exact raw text from the Blueprint (not a screenshot)
- Use the "Load Example" button to verify the tool is working
- Check your browser console (F12) for parser errors

### Tokens still seem high

You likely have a very large Blueprint. Try:
- Splitting the function into smaller sub-functions
- Checking if `dropPositions` and `dropDefaults` are both enabled
- Passing the output to Claude with `claude-opus-4-6` model for better token handling

---

## Browser Compatibility

Works in any modern browser:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (responsive layout)

No external dependencies — pure vanilla JavaScript. Uses local storage only for the session; nothing is sent to the server.

---

## Limitations & Future Work

### Current Limitations
- Comments/annotations in Blueprints are lost (they exist in `PinToolTip` but are rarely essential)
- Reroute/knot nodes are flattened out (their IDs preserved, but paths simplified)
- Custom Blueprint nodes show only their class name, not parameters
- Event/delegate bindings are parsed but minimally formatted

### Possible Improvements
- **Macro expansion** — Detect and inline Blueprint macros
- **Flow simplification** — Collapse trivial pin-pass sequences
- **Type inference** — Reverse-engineer types from usage when missing
- **Mermaid diagram export** — Generate a visual flowchart from optimized output
- **Side-by-side comparison** — Show GUID positions to cross-reference with original

---

## Contributing / Feedback

This is a standalone HTML tool—no build, no dependencies. Want to improve it?

**Easy wins:**
- Add support for additional node types
- Better enum/struct name extraction
- Custom shortening aliases (user input?)
- Export to JSON/YAML for other tools

Simply edit the HTML file and test with your Blueprints.

---

## License

Public domain. Use, modify, share freely. No attribution required.

---

## FAQ

**Q: Does this work with Blueprints from any UE version?**  
A: Yes, the format is stable across UE 4.25+ and UE5. The output is version-agnostic.

**Q: Can I use this to convert my Blueprint back to visual form?**  
A: Not directly (that would require a Unreal plugin). But you can use this format as a spec to recreate the Blueprint manually, or as an intermediate step in a larger conversion pipeline.

**Q: Why does the output have so many unconnected pins?**  
A: Some pins are internal (like the `self` reference on getter nodes). The optimizer tries to hide these by default—check the `[orphan]` flag if they show up.

**Q: How accurate is the C++ that Claude generates from this?**  
A: Very good if you provide context (type definitions, which module the function belongs to, expected behavior). You may need to:
- Add error handling
- Refactor for performance
- Handle async/delegates differently
- Match your codebase conventions

Start with Claude's output and refine from there.

**Q: Can I use this for very large Blueprints?**  
A: Yes, but browser performance may degrade on 1000+ node functions. For huge graphs, consider:
- Breaking into smaller functions first
- Using Claude to help parallelize the logic
- Checking browser tab memory usage (F12 > Performance)

**Q: What if my Blueprint has custom nodes?**  
A: They'll appear as `[CallX] Call ClassName::FunctionName`. The optimizer can't decompose custom C++ nodes, but the AI can look them up and understand their signatures.

---

**Made for developers who need to turn visual logic into maintainable C++ fast.**

Happy converting! 🚀
