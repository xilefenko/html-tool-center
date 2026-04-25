---
tags:
  - "#flashcards"
---


## Teil 1: Software Engineering allgemein

#Q
### Was ist UML? Nennen Sie die wichtigsten UML-Diagramme!
#A
**UML** (Unified Modeling Language) ist eine standardisierte, grafische Modellierungssprache zur Spezifikation, Visualisierung und Dokumentation von Software-Systemen. Sie wurde von der OMG (Object Management Group) standardisiert und vereinheitlicht frühere Notationen von Booch, Rumbaugh und Jacobson.

UML unterscheidet zwischen **Strukturdiagrammen** (statische Sicht) und **Verhaltensdiagrammen** (dynamische Sicht).

Wichtige UML-Diagramme:

- **Klassendiagramm** – Klassen, Attribute, Methoden, Beziehungen
- **Use-Case-Diagramm** – Anwendungsfälle, Akteure
- **Sequenzdiagramm** – zeitlicher Ablauf von Nachrichten zwischen Objekten
- **Aktivitätsdiagramm** – Abläufe, Workflows
- **Zustandsdiagramm** – Zustände und Übergänge eines Objekts
- **Komponentendiagramm** – Software-Komponenten und ihre Schnittstellen
- **Verteilungsdiagramm (Deployment)** – physische Verteilung auf Hardware
- **Paketdiagramm** – Gruppierung von Klassen
- **Objektdiagramm** – Momentaufnahme konkreter Instanzen
- **Kommunikationsdiagramm** – Nachrichten zwischen Objekten (Fokus Struktur)
#/Q
<!--SR:!2026-04-18,1,170-->

---

#Q
### Beschreiben Sie die wichtigsten Tätigkeiten, die im Zuge eines Software-Projekts anfallen!

#A
1. **Anforderungsanalyse (Requirements Engineering)** – Erheben und Dokumentieren der Wünsche des Auftraggebers (Pflichtenheft).
2. **Analyse** – Verstehen des Problems, Modellierung der fachlichen Zusammenhänge.
3. **Design/Entwurf** – Architektur, Entwurf der Klassen, Schnittstellen, Datenbanken.
4. **Implementierung** – Codierung in einer Programmiersprache.
5. **Test/Qualitätssicherung** – Unit-Tests, Integrationstests, Systemtests, Abnahmetests.
6. **Auslieferung/Deployment** – Installation beim Kunden.
7. **Wartung und Weiterentwicklung** – Fehlerbehebung, neue Features.

Begleitend: **Projektmanagement** (Planung, Aufwandsschätzung, Controlling), **Dokumentation**, **Konfigurations- und Versionsmanagement**.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was verstehen Sie unter Anforderungsanalyse?

#A
Die Anforderungsanalyse (Requirements Engineering) ist der Prozess des systematischen Erfassens, Analysierens, Spezifizierens und Validierens aller Anforderungen an ein Software-System.

Man unterscheidet:

- **Funktionale Anforderungen** – was das System tun soll (Features, Use Cases).
- **Nicht-funktionale Anforderungen** – Qualitätsanforderungen wie Performance, Sicherheit, Usability, Verfügbarkeit.

Ergebnis: **Lastenheft** (Kundensicht) und **Pflichtenheft** (Auftragnehmersicht). Typische Techniken: Interviews, Workshops, Use Cases, Prototyping, Beobachtung.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Welche UML-Diagramme können in der Analysephase verwendet werden?

#A
- **Use-Case-Diagramm** – Funktionalität aus Nutzersicht
- **Klassendiagramm** (Analysemodell, fachliche Klassen ohne technische Details)
- **Aktivitätsdiagramm** – Geschäftsprozesse, Abläufe
- **Zustandsdiagramm** – Lebenszyklen fachlicher Objekte
- **Sequenzdiagramm** – beispielhafte Szenarien zu Use Cases
- **Objektdiagramm** – konkrete Beispielkonstellationen

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was ist ein Sequenzdiagramm und wofür können Sequenzdiagramme eingesetzt werden?

#A
Ein Sequenzdiagramm ist ein UML-Verhaltensdiagramm, das den **zeitlichen Ablauf von Nachrichten (Methodenaufrufen) zwischen Objekten** darstellt. Objekte werden als vertikale Lebenslinien gezeichnet, Nachrichten als horizontale Pfeile, die Zeit verläuft von oben nach unten.

Einsatzgebiete:

- Beschreibung von Szenarien zu Use Cases
- Dokumentation der Interaktion zwischen Klassen/Komponenten
- Entwurf von Schnittstellen und Protokollen
- Kommunikation im Team, Diskussionsgrundlage
- Analyse von Nebenläufigkeit und zeitlichem Verhalten

#/Q
<!--SR:!2026-04-19,1,199-->
---

#Q
### Welche Tätigkeiten fasst man unter dem Begriff „Design" zusammen?

#A
- **Softwarearchitektur** – Gesamtstruktur, Schichtenaufteilung, Komponenten, Schnittstellen
- **Feinentwurf** – Entwurf einzelner Klassen, Methoden, Datenstrukturen
- **Datenbankentwurf** – logisches/physisches Datenmodell
- **UI-/UX-Design** – Oberflächengestaltung
- **Auswahl von Technologien, Frameworks, Entwurfsmustern (Design Patterns)**
- **Entwurf von Schnittstellen** zu Fremdsystemen
- Design führt das „Was" (Analyse) in das „Wie" (Implementierung) über.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Welche Beziehungen zwischen Klassen können in einem Klassendiagramm eingetragen werden?

#A
- **Assoziation** – allgemeine Beziehung („kennt")
- **Aggregation** – schwaches Ganzes-Teil (weiße Raute)
- **Komposition** – starkes Ganzes-Teil, Teil existiert nicht ohne Ganzes (schwarze Raute)
- **Generalisierung/Vererbung** – „ist ein" (Pfeil mit Dreieck)
- **Realisierung** – Klasse implementiert Interface (gestrichelter Pfeil)
- **Abhängigkeit (Dependency)** – „nutzt" (gestrichelter Pfeil)
- Zusätzlich: **Multiplizitäten** (1, 0..1, 1..*, *), **Rollen**, **Navigierbarkeit**.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was steht in einem Projektplan? Was ist ein Meilenstein?

#A
Ein **Projektplan** enthält:

- Projektziele und Umfang
- Arbeitspakete / Work-Breakdown-Structure
- Zeitplan (z. B. Gantt-Chart) mit Start-/Endterminen
- Ressourcen- und Personalplanung
- Aufwands- und Kostenschätzung
- Abhängigkeiten zwischen Aufgaben
- Risiken und Gegenmaßnahmen
- Meilensteine

Ein **Meilenstein** ist ein besonderes Ereignis im Projekt ohne eigene Dauer, an dem ein definiertes Zwischenergebnis vorliegt (z. B. „Pflichtenheft abgenommen", „Prototyp fertig", „Go-Live"). Meilensteine dienen der Fortschrittskontrolle.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Welche Methoden der Qualitätssicherung können in einem Software-Projekt eingesetzt werden?

#A
**Konstruktive Maßnahmen** (Qualität von vornherein einbauen):

- Coding Guidelines, Entwurfsmuster
- Einsatz bewährter Frameworks/Bibliotheken
- Schulung der Mitarbeiter

**Analytische Maßnahmen** (Prüfung):

- **Statische Verfahren**: Code Reviews, Walkthroughs, Inspektionen, statische Analyse-Tools (Linter, SonarQube)
- **Dynamische Verfahren**: Unit-Tests, Integrationstests, Systemtests, Abnahmetests, Regressionstests, Lasttests
- Test-Driven Development (TDD), Continuous Integration
- Code Coverage Messung

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was versteht man unter Versionskontrolle?

#A
Versionskontrolle ist die systematische Verwaltung von Änderungen an Dateien (v. a. Quellcode) über die Zeit. Sie erlaubt:

- Nachvollziehbarkeit aller Änderungen (wer, wann, was, warum)
- Rückkehr zu früheren Ständen
- Paralleles Arbeiten mehrerer Entwickler (Branching/Merging)
- Release-Management durch Tags

Man unterscheidet **zentrale** Systeme (SVN, CVS) und **verteilte** Systeme (Git, Mercurial). Heute ist **Git** mit Plattformen wie GitHub, GitLab, Bitbucket Standard.

#/Q
<!--SR:!2026-04-19,1,199-->
---

#Q
### Was beeinflusst den Aufwand eines Software-Projekts? Wie kann Aufwand geschätzt werden?

#A
**Einflussfaktoren:**

- Größe und Komplexität (Anzahl Funktionen, Codezeilen)
- Anforderungen an Qualität (Sicherheit, Performance)
- Erfahrung und Größe des Teams
- Eingesetzte Technologien, Toolunterstützung
- Stabilität der Anforderungen (Changes)
- Umgebungsbedingungen, Schnittstellen zu Fremdsystemen

**Schätzmethoden:**

- **Expertenschätzung** (Delphi-Methode)
- **Analogieschätzung** (Vergleich mit ähnlichen Projekten)
- **Function Point Analyse**
- **COCOMO / COCOMO II** – formelbasiertes Modell auf Basis von LOC
- **Story Points / Planning Poker** (agil)
- **Bottom-Up-Schätzung** über Arbeitspakete

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Welche Vorgehensmodelle der Software-Entwicklung gibt es?

#A
- **Wasserfallmodell** – sequenzielle Phasen, wenig Rücksprünge
- **V-Modell / V-Modell XT** – jeder Entwicklungsphase ist eine Testphase zugeordnet
- **Spiralmodell** (Boehm) – iterativ, risikogetrieben
- **Prototyping**
- **Rational Unified Process (RUP)** – iterativ, phasenbasiert
- **Agile Modelle**: Scrum, Kanban, Extreme Programming (XP), Crystal
- **DevOps** – Verschmelzung von Entwicklung und Betrieb

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wie funktioniert „Agile Softwareentwicklung"? Erklären Sie die 3 Rollen und ihre Aufgaben in einem SCRUM-Team.

#A
**Agile Softwareentwicklung** basiert auf dem Agilen Manifest: Individuen und Interaktionen vor Prozessen, funktionierende Software vor umfassender Dokumentation, Zusammenarbeit mit dem Kunden vor Vertragsverhandlung, Reagieren auf Veränderung vor dem Befolgen eines Plans. Entwicklung erfolgt iterativ und inkrementell in kurzen Zyklen (Sprints), mit kontinuierlichem Feedback.

**Scrum** ist das bekannteste agile Framework. Arbeit erfolgt in Sprints (meist 2–4 Wochen). Kern-Artefakte: Product Backlog, Sprint Backlog, Increment. Events: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.

**Die 3 Rollen:**

1. **Product Owner (PO)** – verantwortlich für den Wert des Produkts. Pflegt und priorisiert den Product Backlog, formuliert User Stories, vertritt die Stakeholder und entscheidet, *was* entwickelt wird.
2. **Scrum Master** – verantwortlich für den Scrum-Prozess. Coacht das Team, beseitigt Hindernisse (Impediments), schützt das Team vor Störungen, moderiert Scrum-Events. Keine fachliche Weisungsbefugnis.
3. **Development Team (Entwicklungsteam)** – selbstorganisiertes, cross-funktionales Team (typ. 3–9 Personen), das das Increment erstellt. Entscheidet selbst, *wie* die Anforderungen umgesetzt werden.

#/Q
<!--SR:!2026-04-18,1,199-->
---

## Teil 2: OO-Programmierung allgemein

#Q
### Erklären Sie die Begriffe Klasse, Instanz, Objekt, Attribut und Methode?

#A
- **Klasse** – Bauplan/Typ, beschreibt Eigenschaften und Verhalten einer Menge gleichartiger Objekte.
- **Objekt / Instanz** – konkrete Ausprägung einer Klasse zur Laufzeit (beide Begriffe meist synonym).
- **Attribut** – Datenelement (Eigenschaft, Zustandsvariable) einer Klasse bzw. eines Objekts.
- **Methode** – Funktion/Operation einer Klasse, die auf ihren Attributen operiert.

Beispiel: Klasse `Auto` mit Attributen `farbe`, `kmStand` und Methoden `starten()`, `fahren()`. `meinBMW` ist eine Instanz der Klasse.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wie können Objekte erzeugt werden?

#A
- Über den **Konstruktor** mit dem Schlüsselwort `new` (Java, C#) bzw. per Wertdeklaration oder `new` in C++
- In C++ zusätzlich:
  - **Stack-Allokation**: `MyClass obj;` oder `MyClass obj(args);`
  - **Heap-Allokation**: `MyClass* p = new MyClass(args);`
  - **Smart Pointer**: `auto p = std::make_unique<MyClass>(args);`
- Durch **Kopie** eines anderen Objekts (Copy-Konstruktor)
- Durch **Move** (Move-Konstruktor, C++11)
- Über **Factory-Methoden** oder **Clone**-Methoden
- Durch **Deserialisierung**

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was passiert bei der Vererbung?

#A
Eine abgeleitete Klasse (Subklasse) übernimmt Attribute und Methoden einer Basisklasse (Superklasse) und kann diese **erweitern** (neue hinzufügen) oder **überschreiben** (redefinieren). Es entsteht eine „ist-ein"-Beziehung. Subklasse-Objekte sind auch Basisklasse-Objekte (Liskov Substitution Principle). In C++ ist Mehrfachvererbung möglich, in Java/C# nur Einfachvererbung plus mehrere Interfaces.

#/Q
<!--SR:!2026-04-18,1,188-->
---

#Q
### Was sind statische Methoden und statische Variablen?

#A
**Statische Variablen** (`static`) gehören zur Klasse selbst, nicht zu einem einzelnen Objekt. Es existiert **genau eine** Instanz, die von allen Objekten geteilt wird.

**Statische Methoden** operieren nicht auf Instanzdaten, sondern nur auf Parametern und statischen Variablen. Sie können ohne Objekt aufgerufen werden: `Klasse::methode()` bzw. `Klasse.methode()`. In statischen Methoden existiert kein `this`. Typische Einsätze: Hilfsfunktionen, Fabrikmethoden, Zähler.

#/Q
<!--SR:!2026-04-18,1,188-->
---

#Q
### Wofür steht „this"?

#A
`this` ist ein impliziter Zeiger (C++) bzw. eine Referenz (Java/C#) auf das **aktuelle Objekt**, auf dem gerade eine Methode ausgeführt wird. Einsatz:

- Unterscheidung zwischen Attribut und gleichnamigem Parameter (`this->x = x;`)
- Rückgabe des eigenen Objekts (Method Chaining: `return *this;`)
- Übergabe des eigenen Objekts an andere Methoden
- In statischen Methoden existiert kein `this`.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was versteht man unter Polymorphismus?

#A
Polymorphismus („Vielgestaltigkeit") bedeutet, dass **derselbe Aufruf je nach tatsächlichem Typ des Objekts unterschiedliches Verhalten** zeigt. Man unterscheidet:

- **Statischer Polymorphismus** (zur Compilezeit): Überladung von Funktionen/Operatoren, Templates.
- **Dynamischer Polymorphismus** (zur Laufzeit): virtuelle Methoden. Ein Basisklassen-Zeiger/-Referenz zeigt auf ein Subklassen-Objekt, und der Aufruf einer virtuellen Methode wird zur Laufzeit auf die Methode der tatsächlichen Klasse aufgelöst (Late Binding, über vtable).

#/Q
<!--SR:!2026-04-19,1,199-->
---

#Q
### Was sind abstrakte/virtuelle Klassen?

#A
Eine **abstrakte Klasse** ist eine Klasse, von der keine Objekte erzeugt werden können. Sie dient nur als gemeinsame Basisklasse. In C++ ist eine Klasse abstrakt, sobald sie mindestens eine **pure virtual function** enthält.

Eine **virtuelle Basisklasse** (C++) ist ein Konzept der Mehrfachvererbung: Mit `virtual` wird sichergestellt, dass bei Diamond-Vererbung die Basisklasse nur **einmal** im abgeleiteten Objekt vorhanden ist.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was sind abstrakte Methoden?

#A
Abstrakte Methoden sind Methoden, die nur **deklariert**, aber nicht implementiert sind. Sie müssen von abgeleiteten (nicht abstrakten) Klassen überschrieben werden. In C++ heißen sie *pure virtual functions*: `virtual void f() = 0;`. In Java/C# gibt es das Schlüsselwort `abstract`.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was ist ein Konstruktor?

#A
Ein Konstruktor ist eine spezielle Methode, die beim Erzeugen eines Objekts automatisch aufgerufen wird und das Objekt initialisiert. Eigenschaften:

- Heißt wie die Klasse
- Hat keinen Rückgabetyp
- Kann überladen werden (mehrere Konstruktoren mit unterschiedlichen Parametern)
- Standardkonstruktor: ohne Parameter
- Copy-Konstruktor: Parameter ist eine Referenz auf ein Objekt derselben Klasse
- Move-Konstruktor (C++11): Parameter ist eine Rvalue-Referenz

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was sind Exceptions?

#A
Exceptions (Ausnahmen) sind ein Mechanismus zur Behandlung von **Fehlersituationen**, die den normalen Programmablauf unterbrechen. Eine Exception wird mit `throw` „geworfen" und mit `try`/`catch` gefangen. Vorteile gegenüber Rückgabewerten:

- Trennung von Normal- und Fehlerlogik
- Fehler können nicht „ignoriert" werden
- Automatisches Aufräumen durch Stack Unwinding (in C++ werden Destruktoren lokaler Objekte aufgerufen → RAII)

#/Q
<!--SR:!2026-04-18,1,199-->
---

## Teil 3: C++

#Q
### Wozu dienen Header-Files?

#A
Header-Dateien (`.h`/`.hpp`) enthalten **Deklarationen** (Klassen, Funktionsprototypen, Konstanten, Templates), die in mehreren Übersetzungseinheiten benötigt werden. Sie werden per `#include` in `.cpp`-Dateien eingebunden. So kennt der Compiler die Schnittstelle, während die Implementierung in der `.cpp`-Datei liegt und separat übersetzt wird. Include-Guards (`#ifndef`/`#define`/`#endif` bzw. `#pragma once`) verhindern Mehrfacheinbindung.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Welche Zugriffsattribute gibt es in Klassen, wie werden diese vererbt und was ist der Unterschied zwischen „class" und „struct"?

#A
**Zugriffsattribute:**

- `public` – von überall zugänglich
- `protected` – nur in der Klasse selbst und in abgeleiteten Klassen
- `private` – nur in der Klasse selbst (und `friend`s)

**Vererbung** in C++ kann `public`, `protected` oder `private` sein:

| Basis / Vererbung  | public      | protected   | private  |
| ------------------ | ----------- | ----------- | -------- |
| public-Member      | public      | protected   | private  |
| protected-Member   | protected   | protected   | private  |
| private-Member     | nicht zug.  | nicht zug.  | nicht zug. |

**Unterschied `class` vs. `struct`**: nur die **Default-Sichtbarkeit**. Bei `class` sind Member und Vererbung standardmäßig `private`, bei `struct` standardmäßig `public`. Funktional sind beide gleichwertig.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wozu werden Konstruktoren und Destruktoren i.d.R. verwendet?

#A
- **Konstruktor**: Initialisieren der Attribute, Anfordern von Ressourcen (Speicher mit `new`, Datei öffnen, Lock, Netzwerkverbindung).
- **Destruktor**: Freigeben dieser Ressourcen (Speicher mit `delete`, Datei schließen, Lock freigeben).

Dieses Muster heißt **RAII** (Resource Acquisition Is Initialization) und ist ein zentrales Konzept in C++.

#/Q
<!--SR:!2026-04-19,1,199-->
---

#Q
### Wann entstehen Objekte? – nennen Sie alle Möglichkeiten – und wann werden sie wieder zerstört?

#A
**Entstehung:**

- **Globale/statische Objekte**: vor `main()`, Destruktion nach `main()`.
- **Lokale (Stack-)Objekte**: bei Eintritt in ihren Block, Destruktion beim Verlassen des Blocks (in umgekehrter Reihenfolge).
- **Heap-Objekte mit `new`**: bei `new`, Destruktion erst bei `delete` bzw. via Smart Pointer.
- **Temporäre Objekte**: bei Ausdrücken, Zerstörung am Ende der full expression.
- **Member-Objekte**: gleichzeitig mit dem umgebenden Objekt (vor dem Rumpf des Konstruktors, in Deklarationsreihenfolge).
- **Basisklassenteile**: vor den Member-Objekten.
- **Array-Elemente**: bei Array-Erzeugung.
- Durch **Copy-/Move-Konstruktor**, z. B. bei Übergabe by value oder Rückgabe.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Welche zwei Möglichkeiten der Verwendung des Operators `new` gibt es und warum müssen sie unterschieden werden?

#A
1. **`new T`** für ein einzelnes Objekt → muss mit **`delete p`** freigegeben werden.
2. **`new T[n]`** für ein Array → muss mit **`delete[] p`** freigegeben werden.

Grund: Bei Array-Allokation werden zusätzliche Verwaltungsinformationen (Anzahl Elemente) gespeichert, damit für jedes Element der Destruktor aufgerufen werden kann. Falsche Kombination (`new[]` mit `delete` oder umgekehrt) ist **undefiniertes Verhalten**.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was ist eine Referenz? Was ist der Unterschied zu einem Pointer?

#A
Eine **Referenz** ist ein **Alias** für ein bereits existierendes Objekt: `int& r = x;`.

Unterschiede zu Pointern:

| Eigenschaft         | Referenz                | Pointer                   |
| ------------------- | ----------------------- | ------------------------- |
| Muss initialisiert? | Ja, bei Deklaration     | Nein                      |
| Kann null sein?     | Nein                    | Ja (`nullptr`)            |
| Neu zuweisbar?      | Nein (bindet fix)       | Ja                        |
| Syntax              | wie normaler Name       | Dereferenzieren mit `*`   |
| Eigene Adresse?     | Konzeptionell nein      | Ja                        |

Referenzen sind sicherer und werden v. a. für Parameter- und Rückgabeübergabe verwendet.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wie können Parameter in C++ übergeben werden?

#A
- **Call by Value**: `void f(int x)` – Kopie, unverändert im Aufrufer.
- **Call by Reference**: `void f(int& x)` – direkter Zugriff, Änderungen wirken nach außen.
- **Call by const Reference**: `void f(const T& x)` – keine Kopie, keine Änderung möglich; effizient für große Objekte.
- **Call by Pointer**: `void f(int* p)` – wie Referenz, kann aber `nullptr` sein.
- **Call by Rvalue-Reference** (C++11): `void f(T&& x)` – für Move-Semantik.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was ist ein Copy-Konstruktor und wann kommt er zum Einsatz?

#A
Der Copy-Konstruktor erzeugt ein neues Objekt als Kopie eines bestehenden Objekts der gleichen Klasse. Signatur: `T(const T& other);`.

Er wird aufgerufen bei:

- Initialisierung aus einem anderen Objekt: `T b = a;` oder `T b(a);`
- Übergabe eines Objekts **by value** an eine Funktion
- Rückgabe eines Objekts **by value** aus einer Funktion (sofern keine Copy-Elision/RVO greift)
- Einfügen in Container

Wird kein Copy-Konstruktor definiert, erzeugt der Compiler einen, der **memberweise kopiert** (flache Kopie) – problematisch bei Zeigern/Ressourcen.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Um welche 2 anderen Klassenfunktionen sollten Sie sich noch kümmern, wenn eine Klasse einen Destruktor braucht?

#A
**Rule of Three**: Braucht eine Klasse einen nicht-trivialen Destruktor, braucht sie i. d. R. auch einen

1. **Copy-Konstruktor** und einen
2. **Copy-Zuweisungsoperator** (`operator=`).

Seit C++11 erweitert zur **Rule of Five**: zusätzlich **Move-Konstruktor** und **Move-Zuweisungsoperator**. Alternativ **Rule of Zero**: keinen dieser Operatoren definieren und stattdessen RAII-Wrapper (Smart Pointer, Container) verwenden.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wie funktioniert die Datei-Ein/Ausgabe in C++?

#A
Über die Streams der Standardbibliothek (`<fstream>`):

- `std::ifstream` – zum Lesen
- `std::ofstream` – zum Schreiben
- `std::fstream` – zum Lesen und Schreiben

Beispiel:

```cpp
std::ofstream out("data.txt");
out << "Hallo " << 42 << std::endl;

std::ifstream in("data.txt");
std::string s; int n;
in >> s >> n;
```

Dateien werden beim Konstruktor geöffnet und beim Destruktor automatisch geschlossen (RAII). Modi: `std::ios::in`, `out`, `app`, `binary`, `trunc`, `ate`. Prüfung per `if (!file)` oder `file.good()`.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was ist eine pure virtual function, eine abstrakte Basisklasse und eine virtuelle Basisklasse?

#A
- **Pure virtual function**: virtuelle Methode ohne Implementierung: `virtual void f() = 0;`. Muss von abgeleiteten Klassen überschrieben werden.
- **Abstrakte Basisklasse**: Klasse, die mindestens eine pure virtual function enthält. Von ihr können keine Objekte erzeugt werden; sie dient als Schnittstelle/gemeinsame Basis.
- **Virtuelle Basisklasse**: Klasse, die in einer Vererbungshierarchie mit `virtual` geerbt wird (`class B : virtual public A`). Löst das „Diamond-Problem" bei Mehrfachvererbung, indem die Basis nur einmal im Endobjekt existiert.

#/Q
<!--SR:!2026-04-19,1,199-->
---

#Q
### Was versteht man unter Operator Overloading? Wozu wird dies i.d.R. benötigt?

#A
Operator Overloading bedeutet, dass Operatoren (`+`, `-`, `<<`, `==`, `[]`, `()` …) für eigene Typen umdefiniert werden können. Ziel: eigene Klassen so benutzbar machen wie eingebaute Typen. Typische Anwendungen:

- Mathematische Klassen (Vektor, Matrix, komplexe Zahlen)
- Stream-Ausgabe/-Eingabe (`operator<<`, `operator>>`)
- Vergleichsoperatoren für Sortierung/Container
- Smart Pointer (`*`, `->`)
- Container-Indexzugriff (`operator[]`)

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wann kann Operator Overloading nicht mit einer Methode der Klasse implementiert werden, und wie machen Sie es dann?

#A
Wenn der **linke Operand nicht vom eigenen Typ** ist (oder wenn man symmetrische Konvertierungen auf beiden Seiten zulassen möchte), geht es nicht als Memberfunktion. Klassisches Beispiel: `operator<<` für Streams:

```cpp
std::ostream& operator<<(std::ostream& os, const MyClass& obj) {
    os << obj.getValue();
    return os;
}
```

Hier ist der linke Operand ein `std::ostream`, dessen Klasse wir nicht erweitern. Lösung: Implementierung als **freie (nicht-Member-)Funktion**, oft mit `friend`-Deklaration, falls Zugriff auf private Member nötig ist.

Member-Funktion ist außerdem Pflicht für: `=`, `[]`, `()`, `->`.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was sind Templates und wie werden sie verwendet?

#A
Templates ermöglichen **generische Programmierung**: Klassen und Funktionen werden mit **Typparametern** geschrieben und vom Compiler für jeden konkret benutzten Typ instanziiert.

```cpp
template <typename T>
T max(T a, T b) { return (a > b) ? a : b; }

template <typename T>
class Stack { /* ... */ };

Stack<int> s;
```

Arten: **Funktions-Templates**, **Klassen-Templates**, **Variable-Templates** (C++14), **Alias-Templates**. Spezialisierungen (`template <> class Stack<bool> { ... };`) sind möglich. Templates sind die Basis der STL.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was sind Lambda-Expressions und welche 2 anderen Möglichkeiten gibt es noch, um Algorithmen … (zu parametrisieren)?

#A
**Lambda-Expressions** (C++11) sind anonyme Funktionsobjekte, inline definierbar:

```cpp
auto f = [x](int a) { return a + x; };
std::sort(v.begin(), v.end(), [](int a, int b){ return a > b; });
```

Capture-Liste `[]` legt fest, welche Variablen aus dem Umfeld erfasst werden (`[=]` by value, `[&]` by reference).

Zwei weitere Möglichkeiten, STL-Algorithmen ein Verhalten mitzugeben:

1. **Freie Funktionen / Funktionszeiger** – klassische Callback-Funktionen.
2. **Funktionsobjekte (Functors)** – Klassen mit überladenem `operator()`. Können Zustand halten und sind performanter, weil der Compiler gut inlinen kann. Beispiele aus `<functional>`: `std::less<>`, `std::greater<>`.

#/Q
<!--SR:!2026-04-18,1,188-->
---

#Q
### Erklären Sie das Prinzip der Exceptions und nennen Sie Beispiele, wo diese sinnvoll angewandt werden können und wo eher nicht.

#A
**Prinzip**: Mit `throw obj` wird ein Ausnahmeobjekt erzeugt. Der Kontrollfluss verlässt die aktuelle Funktion und wandert den Stack nach oben (Stack Unwinding), wobei Destruktoren lokaler Objekte aufgerufen werden. Der erste passende `catch`-Block in einem umgebenden `try` fängt die Exception.

```cpp
try {
    riskante_operation();
} catch (const std::runtime_error& e) {
    std::cerr << e.what();
}
```

**Sinnvoll**: bei unerwarteten, seltenen Fehlern, z. B.

- Datei nicht gefunden / nicht lesbar
- Netzwerkfehler
- Out-of-Memory (`std::bad_alloc`)
- Konstruktorfehler (kein Rückgabewert verfügbar)
- Ungültige Argumente tief in einer Aufrufkette

**Weniger sinnvoll**:

- für normalen Kontrollfluss (if/else reicht)
- in Performance-kritischem Inner-Loop-Code
- in Destruktoren (dürfen keine Exceptions durchlassen → `noexcept`)
- in eingebetteten/Echtzeitsystemen mit strengen Timing-Garantien

#/Q
<!--SR:!2026-04-18,1,188-->
---

#Q
### Was sind und in welcher Beziehung zueinander stehen die Konzepte der STL: Container, Algorithm, Iterator?

#A
- **Container** speichern Daten (z. B. `vector`, `list`, `map`).
- **Algorithmen** sind generische Funktionen, die auf Datenbereichen arbeiten (z. B. `sort`, `find`, `for_each`) – sie kennen **keine konkreten Containertypen**.
- **Iteratoren** verbinden beide: Sie sind Zeiger-ähnliche Objekte, die auf Elemente eines Containers verweisen und einen einheitlichen Zugriff bieten.

Ein Algorithmus bekommt i. d. R. ein Iterator-Paar `[begin, end)` und arbeitet auf diesem Bereich – unabhängig davon, welcher Container dahintersteht. Dadurch entsteht eine **M×N-Entkopplung**: M Algorithmen und N Container, statt M·N Einzelimplementierungen.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Geben Sie einen Überblick über die STL-Container der Standardbibliothek und ihre Eigenschaften.

#A
**Sequentielle Container:**

- `std::array<T,N>` – Array fester Größe, Stack-allokiert.
- `std::vector<T>` – dynamisches Array; schnelles `push_back`, wahlfreier Zugriff O(1), Einfügen in der Mitte teuer.
- `std::deque<T>` – Doppelqueue; schnelles Einfügen am Anfang/Ende, wahlfreier Zugriff.
- `std::list<T>` – doppelt verkettete Liste; schnelles Einfügen/Löschen überall, kein wahlfreier Zugriff.
- `std::forward_list<T>` – einfach verkettete Liste.

**Assoziative Container** (sortiert, meist Rot-Schwarz-Baum, O(log n)):

- `std::set<T>`, `std::multiset<T>`
- `std::map<K,V>`, `std::multimap<K,V>`

**Ungeordnete Container** (Hashtabelle, O(1) amortisiert):

- `std::unordered_set`, `std::unordered_multiset`
- `std::unordered_map`, `std::unordered_multimap`

**Container-Adapter** (benutzen einen anderen Container intern):

- `std::stack` (LIFO)
- `std::queue` (FIFO)
- `std::priority_queue` (Heap)

Strings: `std::string` ist technisch ein Container für `char`.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wie kann ein C++-Programm auf die Argumente aus der Kommandozeile zugreifen und wie sieht die genaue Datenstruktur dafür aus?

#A
Über die Parameter von `main`:

```cpp
int main(int argc, char* argv[]) {
    for (int i = 0; i < argc; ++i)
        std::cout << argv[i] << "\n";
}
```

- `argc` (*argument count*): Anzahl der Argumente inkl. Programmname, daher immer ≥ 1.
- `argv` (*argument vector*): Array von C-Strings (`char*`). `argv[0]` enthält (üblicherweise) den Programmnamen, `argv[1]` bis `argv[argc-1]` die Argumente, `argv[argc]` ist garantiert `nullptr`.

Äquivalent: `char** argv`. Die eigentliche Datenstruktur ist also ein Array von Zeigern auf nullterminierte Zeichenketten.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Was ist der Unterschied zwischen Stack und Heap? Was steht wo und in welchen Fällen bevorzugen Sie welchen Speicherort?

#A
| Aspekt              | Stack                          | Heap                          |
| ------------------- | ------------------------------ | ----------------------------- |
| Verwaltung          | automatisch (LIFO)             | manuell (`new`/`delete`) oder via Smart Pointer |
| Geschwindigkeit     | sehr schnell                   | langsamer                     |
| Größe               | klein (typ. wenige MB)         | groß (virtueller Speicher)    |
| Lebensdauer         | an Block gebunden              | bis `delete`/Smart-Pointer-Ende |
| Fragmentierung      | nein                           | möglich                       |
| Fehlerarten         | Stack Overflow                 | Leaks, Dangling Pointer       |

**Stack**: lokale Variablen, Funktionsparameter, Rücksprungadressen. Bevorzugen bei kleinen, kurzlebigen Objekten mit klarer Lebensdauer.

**Heap**: dynamische Datenstrukturen, große Objekte, Objekte, die ihre umgebende Funktion überleben müssen, polymorphe Objekte hinter Basisklassenzeigern. Heute fast immer mit **Smart Pointern** statt rohem `new`/`delete`.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Erklären Sie die „Speicherklassen", die in C++ zur Verfügung stehen und was bedeutet das Schlüsselwort „auto" heute (ab C++11).

#A
**Speicherklassen (storage class specifiers):**

- `auto` – *früher* (vor C++11): automatisch, also Stack; implizit für lokale Variablen, daher quasi nie explizit benutzt. *Heute* bedeutet `auto` etwas völlig anderes (siehe unten).
- `register` – Vorschlag, die Variable in ein Register zu legen (in C++17 deprecated, in C++17 entfernt als Storage Class).
- `static` – statische Lebensdauer (Existenz über gesamte Programmdauer); auf Dateiebene: interne Bindung; in Klassen: klassenweiter Member.
- `extern` – Deklaration einer Variable/Funktion, die in einer anderen Übersetzungseinheit definiert ist (externe Bindung).
- `mutable` – in `const`-Objekten dürfen `mutable`-Member dennoch verändert werden.
- `thread_local` (C++11) – eigene Instanz pro Thread.

**`auto` ab C++11**: kein Storage-Class-Specifier mehr, sondern dient zur **automatischen Typableitung**:

```cpp
auto i = 42;              // int
auto it = v.begin();      // std::vector<T>::iterator
auto lam = [](int x){ return x*x; };
```

Der Compiler leitet den Typ aus dem Initialisierer ab. Sehr nützlich bei langen Template-Typen, Iteratoren und Lambdas.

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Wie funktioniert die „Range-based-for"-Schleife und wann/wo kann sie eingesetzt werden?

#A
Syntax:

```cpp
for (auto& x : container) {
    // x ist Referenz auf Element
}
```

Der Compiler übersetzt sie (vereinfacht) zu:

```cpp
for (auto it = std::begin(container); it != std::end(container); ++it) {
    auto& x = *it;
    ...
}
```

**Einsetzbar** für alles, was `begin()`/`end()` anbietet (oder wofür freie `begin/end` existieren):

- STL-Container (`vector`, `list`, `map`, …)
- C-Arrays mit bekannter Größe
- `std::string`, `std::initializer_list`
- Eigene Klassen, die `begin()`/`end()` bereitstellen

Typische Formen:

- `for (auto x : v)` – Kopie
- `for (auto& x : v)` – Referenz, veränderbar
- `for (const auto& x : v)` – nur-lesender, kopierfreier Zugriff (empfohlen für große Objekte)

#/Q
<!--SR:!2026-04-18,1,199-->
---

#Q
### Welche 2 Smart-Pointer-Typen gibt es in C++ (ab Version 11) und wann/wozu wird welcher eingesetzt?

#A
(Hinweis: Der veraltete `std::auto_ptr` wurde entfernt. Die zwei modernen, praxisrelevanten Typen sind:)

1. **`std::unique_ptr<T>`** – **exklusives Besitzrecht**. Ein Objekt gehört genau einem `unique_ptr`. Nicht kopierbar, aber **moveable**. Sehr schlank (praktisch null Overhead gegenüber rohem Zeiger). **Einsatz**: Standardfall – immer wenn ein Objekt genau einen Besitzer hat; Rückgabe aus Factory-Funktionen; Ressourcen in Klassen.

   ```cpp
   auto p = std::make_unique<Foo>(42);
   ```

2. **`std::shared_ptr<T>`** – **geteiltes Besitzrecht** per Referenzzähler. Das Objekt wird gelöscht, wenn der letzte `shared_ptr` zerstört wird. Mehr Overhead (Kontrollblock, atomare Zähler). **Einsatz**: wenn tatsächlich mehrere Stellen gemeinsam Besitzer sein müssen, z. B. geteilte Caches, Graphen.

   ```cpp
   auto p = std::make_shared<Foo>(42);
   ```

Ergänzend: **`std::weak_ptr<T>`** – nicht-besitzende Beobachtung eines `shared_ptr`, um zyklische Referenzen zu vermeiden.

**Faustregel**: Erst `unique_ptr` verwenden, `shared_ptr` nur wenn echtes Shared Ownership nötig ist.
#/Q
<!--SR:!2026-04-19,1,188-->
