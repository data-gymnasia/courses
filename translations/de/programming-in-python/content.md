# Programmieren mit Python

## Einführung

> id: intro
> section: introduction
> color: "#88349a"
> next: linear-algebra
> author: Samuel S. Watson

Dieses Kapitel ist eine Einführung in die Programmierung in **Python**, einer vielseitig einsetzbaren Sprache die unter Softwareentwicklern sehr beliebt ist. Vor allem auch im wissenschaftlichen Bereich aufgrund der  seit Anfang der 2000er Jahre entwickelten [Pakete](gloss:package) ist sie zur beliebtesten Sprache im Zusammenhang mit Data Science (Datenwissenschaft) geworden.

Mit dem Programmieren steht uns ein mächtiges Werkzeug zur Verfügung. Beim Erlernen der Programmierung verbessert man aber auch ganz allgemein die Fähigkeit, Probleme zu lösen und systematisch an Strukturen und Berechnungen heranzugehen. Du wirst wahrscheinlich feststellen, dass Ideen aus der Informatik deine Fähigkeit, über komplexe Systeme nachzudenken, verbessern werden, selbst in Situationen, die nichts mit Programmieren zu tun haben. Es ist ganz einfach eine nützliche Art zu denken, die dir beim Lernen weiterhelfen kann.

[Weiter](btn:next)

---
> id: step-1

Dieser Kurs enthält viele Übungen. Sie gewissenhaft zu machen ist für die Aneignung von neuem Wissen und das Erlernen neuer Fähigkeiten unerlässlich. Du solltest jede Übung lösen, bevor du auf die Schaltfläche "Weiter" klickst, um eine mögliche Lösung anzuzeigen.

[Weiter](btn:next)

---
> id: step-2

### Installation

Es gibt mehrere Möglichkeiten, Python anzuwenden:

**Inline**. In diesem Kurs kannst du Python-Codeblöcke direkt auf der Webseite ausführen (wir verdanken das [Juniper](https://github.com/ines/juniper) und [Binder](https://mybinder.org)). Wenn du also noch nichts installieren willst, musst du es nicht tun. (Die erste sogenannte Zelle, die du mit dieser Methode ausführst, wird jedoch etwas lange auf sich warten lassen - bis zu 30 Sekunden - da zuerst einmal die Programmierumgebung hinter den Kulissen auf den Servern von Binder gestartet werden muss. Wenn es zu lange dauert, lade die Seite neu.)

[Weiter](btn:next)

---
> id: step-3

**Binder** oder **Google Colab**. Du kannst Python-Code auch in einem sogenannten Notebook auf der Binder-Website (oder Google Colaboratory)ausführen. Um mit einer Reihe von Paketen zu starten, die auf diesen Kurs zugeschnitten sind, [klicke hier](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master). Wähle dann *New* (rechte obere Ecke) und *Python 3* aus. Es wird dringend empfohlen, während der Arbeit an diesem Kurs eine Registerkarte mit einem Binder-Notebook offen zu halten, da es als Platz für Notizen und eigene Versuche dienen kann. Außerdem bietet es mehr Funktionen als die Blöcke, die direkt auf dieser Seite eingebunden sind. 
[Colab](https://colab.research.google.com/)
[Binder mit deutschen Kursunterlagen](https://mybinder.org/v2/gh/matheharry/Cognitive-Class-Labs-Python-german/binder)

[Weiter](btn:next)

---
> id: step-4

**Anaconda**. Eine Pythonvariante mit vorinstallierten wissenschaftlichen Rechenpaketen und Tools zur Verwaltung von Python-Umgebungen ist die Distribution [Anaconda](https://www.anaconda.com/). [Lade das Installationsprogramm herunter](https://www.anaconda.com/distribution) und starte es, um es auf deinem Computer einzurichten.
Wer auf einem PC keine Rechte hat, Software zu installieren, kann auch [WinPython](http://winpython.sourceforge.net/) verwenden. 

[Weiter](btn:next)

---
> id: step-5

**CoCalc**. Wenn du eine komplette Umgebung benötigst, ohne etwas lokal installieren zu müssen, ist [CoCalc](https://cocalc.com) eine Community-Plattform mit allem Drum und Dran für mathematisches und wissenschaftliches Open-Source-Computing. Man kann sie mit eingeschränkter Funktionalität kostenlos nutzen, und sie kostet $14 pro Monat, um das Projekt zu unterstützen und kostenpflichtige Zusatzfunktionen zu erhalten.

[Weiter](btn:next)

---
> id: step-6


### Anwendung

Sobald du Python installiert hast, gibt es mehrere Möglichkeiten, damit zu arbeiten. 

**REPL**. Starte einen sogenannten Read-Eval-Print Loop (eine Lesen-Auswerten-Anzeigen Schleife) über die [Befehlszeile](gloss:command-line). Jeder von dir eingegebene Code wird sofort ausgeführt, und alle von deinem Code zurückgegebenen Werte werden angezeigt. Um eine Sitzung zu starten, öffne das Terminal (Befehlszeile) deines Betriebssystems und führe `{py} python` oder `{py} ipython` aus (letzteres ist bunter und hat mehr Funktionen). Du kannst das auch in Binder tun, indem du *New > Terminal* auswählst.
Im Fall von WinPython geht das über *WinPython Command Prompt*. 

[Weiter](btn:next)

---
> id: step-7

**Script**. Speichere eine Datei namens _{code}example.py_ und führe _{code}python example.py_ auf der [Befehlszeile](gloss:command-line) aus (im gleichen Verzeichnis wie die Datei), um den gesamten Code im Skript auszuführen. Du kannst das in Binder tun, indem du *New > Text File* auswählst und dann den Namen der Textdatei so änderst, dass sie mit _{code}.py_ endet. 

[Weiter](btn:next)

---
> id: step-8

**Jupyter**. Wie ein REPL, aber erlaubt das Einfügen von Text und mathematischen Ausdrücken, das Gruppieren von Code in Blöcke, etc. Dies ist die standardmäßig in [Binder](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master) bereitgestellte Schnittstelle. Lokal kannst du ein Notebook starten, indem du `{py}jupyter notebook` auf der [Befehlszeile](gloss:command-line) ausführst (vorausgesetzt, du hast Anaconda installiert; in WinPython kann *Jupyter Notebook* direkt aus dem Programmverzeichnis aufgerufen werden). 

[Weiter](btn:next)

---
> id: step-9

**Integrierte Entwicklungsumgebung (IDE)**. Eine IDE ist unerlässlich für umfangreiche Softwareentwicklungsprojekte und bietet einen Editor zum komfortablen und effizienten Schreiben von Code und einen Debugger, der dir dabei hilft, deine Fehler zu beheben. Es gibt viele IDEs für Python, darunter Visual Studio Code, Atom und PyCharm.

[Weiter](btn:next)

---
> id: step-10

::: .exercise
**Übung**.  
Sortiere die folgenden Python-Interaktionsmöglichkeiten in der Reihenfolge, in der sie in diesem Video erscheinen. 

    figure: center: video(src="images/jupyter-script-repl.mp4" width="75%" controls)

    x-sortable
      .item.md(data-index="2") REPL
      .item.md(data-index="1") Script
      .item.md(data-index="0") Jupyter

:::

---

## Grundlagen

> id: basics
> section: basics

Beginnen wir damit uns einen Grundwortschatz für die Elemente eines Programms zu erarbeiten. Viele der Begriffe stammen aus dem Englischen. Auch wenn es für die meisten dieser Begriffe deutsche Übersetzungen gibt ist es oft einfacher, bei den englischen zu bleiben, nachdem sie einmal erklärt wurden, da sie auch so in Python (bzw. in anderen Programmiersprachen) verwendet werden. Dieser Abschnitt bietet einen Überblick: Einige dieser Begriffe werden in späteren Abschnitten genauer behandelt.

[Weiter](btn:next)

---
> id: step-11

### Objekte

Ein **Objekt** ist eine grundlegende Einheit, die von einem Programm manipuliert werden kann. Objekte haben **Typen**; zum Beispiel ist `{py} 5` ein `{py} int` (kurz für "integer", eine Ganzzahl) und `{py} "Hallo Welt!"` ist ein `{py} str` (kurz für "string", eine Zeichenkette bzw. Text). Typen sind für den Computer wichtig, um den Überblick zu behalten, da Objekte je nach Typ unterschiedlich gespeichert werden. 

[Weiter](btn:next)

---
> id: step-12

Du kannst den Typ eines Objekts mit dem Befehl `{py} type` überprüfen. Zum Beispiel gibt `{py} type("Hallo")` als Ergebnis `{py} str` zurück.

[Weiter](btn:next)

---
> id: step-13

::: .exercise
**Übung**.  
Verwende den folgenden Codeblock, um den Typ von `{py} 1.0` zu bestimmen. Hat `{py} 1.0` den gleichen Typ wie `{py} 1`? [[Nein|Ja]]
:::

    pre(python-executable)
      | # ersetze diesen Text durch Code und drücke zum Ausführen die Eingabetaste mit gedrückter Umschalttaste.

---
> id: step-14

(_Hinweis_: du hast wahrscheinlich die Meldung `{code} Loading or None returned` bemerkt, die kurz beim Ausführen der Zelle angezeigt wurde. Wenn diese Meldung für mehr als 10 Sekunden erscheint, ist es wahrscheinlich, dass die Zelle erfolgreich ausgeführt wurde, aber als Ergebnis nichts zu zeigen hat. Wir werden das in Kürze näher besprechen.)

[Weiter](btn:next)

---
> id: step-15

### Variablen

Eine **Variable** ist ein Name, der verwendet wird, um auf ein Objekt zu verweisen. Wir können ein Objekt (z.B. `{py} 41`) wie folgt einer Variablen (z.B. `{py} Alter`) **zuweisen** : 

``` python
Alter = 41
```

Wir sagen, dass `{py} 41` der **Wert** der Variablen `{py} Alter` ist.

[Weiter](btn:next)

---
> id: step-16

Variablennamen müssen mit einem Unterstrich oder Buchstaben beginnen und dürfen danach nur Buchstaben, Zahlen und Unterstriche enthalten. Buchstaben können in Groß- oder Kleinschreibung sein, wobei die Groß- und Kleinschreibung einen Unterschied macht. Zum Beispiel ist `{py} neueWerte0` ein [[gültiger|ungültiger]] Variablenname, und `{py} stop!` ist ein [[ungültiger|gültiger]] Variablenname. 

---
> id: step-17

Das einer Variablen zugeordnete Objekt kann durch weitere Zuweisungen beliebig oft geändert werden.

::: .exercise
**Übung**.  
Finde den Wert den `{py} x` am Ende des folgenden Codeblocks hat. [[3]]

``` python
x = 3
y = x
x = x + 1
x = y
```
:::

---
> id: step-18

*Lösung*. Der Wert 3 wird `{py} x` und dann auch `{py} y` in der zweiten Zeile zugewiesen. Nach der dritten Zeile ist der Wert von `{py} x` gleich 4, da sich die rechte Seite zu 4 ergibt und *dann*  der Variablen `{py} x` zugeordnet wird. Nach der vierten Zeile ist `{py} 3` wieder der Wert von `{py} x` , da der Wert von `{py} y` bei der Ausführung der vierten Zeile immer noch 3 ist. 

[Weiter](btn:next)

---
> id: step-19

::: .exercise
**Übung**.  
Verwende den folgenden Codeblock, um herauszufinden, was passiert, wenn du versuchst, eine Variable zu verwenden, der kein Objekt zugewiesen wurde: Du erhältst einen [[Name]]Error, wobei Error Fehler bedeutet.

:::

    pre(python-executable)
      | anzahl_karotten = 4
      | anzahl_Karrotten

---
> id: step-20

Beachte, dass du bei Auftreten eines Fehlers in deinem Code einen **Traceback** erhältst, der dir hilft, die Fehlerquelle zurückzuverfolgen. ("trace back" bedeutet zurückverfolgen). Damit kein Fehler ausgelöst wird müsste die Variable 'anzahl_Karotten' anders geschrieben werden, nämlich [[anzahl_karotten|Anzahl_Karotten|anzahl karotten]].

### Funktionen

Eine **Funktion** führt eine bestimmte Aufgabe aus. Beispielsweise schreibt `{py} print(x)` den Wert der Variablen `{py} x` als String (Zeichenkette) auf den Bildschirm. (Wenn hier von einer Zeichenkette oder einem Text die Rede ist werden wir von nun an immer den englischen Begriff String verwenden!) 

Die Aufforderung an eine Funktion, ihre Aufgabe auszuführen, wird als **Aufruf** der Funktion bezeichnet. Funktionen werden mit Klammern hinter dem Funktionsnamen aufgerufen, und alle Objekte, die von der Funktion benötigt werden, werden zwischen diesen Klammern bereitgestellt, getrennt durch Kommas. Diese Objekte werden als **Argumente** bezeichnet. 

[Weiter](btn:next)

---
> id: step-21

Einige Funktionen, wie z.B. `{py} print`, sind schon in die Sprache integriert und immer verfügbar. Du kannst auch eigene Funktionen definieren, indem du `{py} def` verwendest:

    pre(python-executable)
      | def schreibe_zweimal(x):
      |     print(x)
      |     print(x)
      |
      | schreibe_zweimal("Holladaroh!")

[Weiter](btn:next)

---
> id: step-22

`{py} def` ist ein Beispiel für ein **Schlüsselwort**: ein Name mit einer besonderen Bedeutung in der Sprache. Da es eine besondere Bedeutung hat, darf ein Schlüsselwort nicht als Variablenname verwendet werden. 

[Weiter](btn:next)

---
> id: step-23

Beachte, dass die Codezeilen, die ausgeführt werden sollen wenn die Funktion aufgerufen wird, vier Leerzeichen in Bezug auf `{py} def` **eingerückt sein müssen** . Zum Beispiel die Zeile `{py} schreibe_zweimal("Holladaroh")` [[ist nicht|ist]] Teil der Definition der Funktion im obigen Beispiel.

---
> id: step-24

Eine Funktion kann eine Aktion ausführen, wie z.B. `{py} schreibe_zweimal`, oder sie kann ein Objekt **zurückgeben** . So wird beispielsweise nach dem Ausführen des folgenden Codeblocks das Objekt `{py} 28` der Variablen `{py} y` zugeordnet. 

    pre(python-executable)
      | def addiere_eins(x):
      |     return x + 1
      |
      | y = 20 + addiere_eins(7)
      | y

(_Hinweis:_ Wir setzen `{py} y` allein auf die letzte Zeile, damit wir den Wert von `{py} y` im Ausgabebereich sehen können. Wenn eine Zuweisung (wie `{py} y = 20 + addiere_eins(7)`) die letzte Zeile in der Zelle ist, dann wird kein Wert gedruckt, und wir erhalten die Meldung `{code} Loading or None returned.`)
      
[Weiter](btn:next)

---
> id: step-25
            
Der Variablenname `{py} x` im obigen Block wird als **Parameter** bezeichnet. Variablen spielen bei der Definition einer mathematischen Funktion die gleiche Stellvertreterrolle wie Parameter (z.B. wenn die Quadratfunktion in der Schreibweise `f(x) = x^2` definiert wird).

[Weiter](btn:next)

---
> id: step-26 

Ein **Operator** ist eine spezielle Art von Funktion, die auf besondere Weise aufgerufen werden kann. So wird beispielsweise der Multiplikationsoperator `{py} *` wie in der Mathematik üblich aufgerufen: `{py} 3 * 5`.

[Weiter](btn:next)

---
> id: step-27 

::: .exercise
**Übung**  
Ordne die folgenden Operatorbeschreibungen in der Reihenfolge an, wie der entsprechende Python-Operator in der Liste `{py} +, **, *, //, /`. Möglicherweise musst du mit dem untenstehenden Codeblock etwas herumprobieren. 

    x-sortable
      .item.md(data-index="4") Division (gewöhnliche Division mit reellen Zahlen)
      .item.md(data-index="3") ganzzahlige Division (nur Quotient; kein Rest)
      .item.md(data-index="0") Addition       
      .item.md(data-index="2") Multiplikation
      .item.md(data-index="1") Potenzieren
      
:::

    pre(python-executable)
      | print(6 + 11)
      | print(2**3)
      | print(3 * 4)
      | print(7//2)
      | print(7/2)

---
> id: step-28

### Anweisungen und Ausdrücke

Eine einzelne ausführbare Codeeinheit in Python wird als **Anweisung** bezeichnet. Beispielsweise ist die Zuordnung`{py} alter = 41` eine Anweisung. Anweisungen können **Ausdrücke** beinhalten, d.h. Kombinationen von Werten, Variablen, Operatoren und Funktionsaufrufen, die eine Sprache interpretiert, **auswertet**  und als Wert zurückgibt. Beispielsweise ist `{py} 1 + alter + abs(3*-4)` ein Ausdruck, der zu [[54]] ausgewertet wird (beachte, dass `{py} abs` die Absolutbetragsfunktion ist und dass `{py} alter` auf den zuvor im Absatz angegebenen Wert gesetzt wurde). 

---
> id: step-29

::: .exercise
**Übung**  
`{py} def f(x): return x*x` ist [[eine Anweisung|ein Ausdruck]]

`{py} 2 + 3*f(4)` ist [[ein Ausdruck|eine Anweisung]]

`{py} y = 13` ist [[eine Anweisung|ein Ausdruck]]

`{py} myName = "John" + "Doe"` ist

    x-picker.list
      .item.pill.bblue(data-error="expression-1") ein Ausdruck      
      .item.pill.bblue eine Anweisung, die beim Ausführen einen Ausdruck auswertet

:::

### Übungen

::: .exercise
**Übung**  
(Versuche es ohne den Code auszuführen.) Der Ausdruck `{py} 1 + 5//3 + 2**3` ergibt [[10]].
:::

---
> id: step-30

::: .exercise
**Übung**  
(Versuche es ohne den Code auszuführen.) Der Ausdruck `{py} 11/2-11//2-3` ergibt [[-2.5]], ausgedrückt als Dezimalzahl (gewöhne dich hier gleich daran, als Dezimalzeichen einen **Punkt** (zB 4.2) anstelle eines Beistrichs (zB 4,2) zu verwenden).
:::

---
> id: step-31

::: .exercise
**Übung**  
Finde den Wert den `{py} x` am Ende des folgenden Codeblocks hat. [[25]]

``` python
x = 3**2
x = x + 1
x = x + 1
y = x//2
x = y*y
z = 2*x
```
:::

---
> id: step-32

::: .exercise
**Übung**  
Schreib eine Funktion `{py} f`, die eine positive ganze Zahl `{py} n` als Eingabe annimmt und die $n$te positive ungerade Zahl zurückgibt. Du solltest die ganze Zeile mit dem Schlüsselwort `{py} pass` im folgenden Codeblock ersetzen (der Rest des Codes prüft ab der vierten Zeile, ob deine Funktion funktioniert).

Beachte auch, dass du *zwei*  Felder zur Verfügung hast: das erste ist zum Ausprobieren und das zweite zum Speichern deiner Antwort. Wenn du mit deinem Code zufrieden bist, kopiere ihn und füge ihn in das zweite Feld ein.
:::

    pre(python-executable)
      | def f(n):
      |     pass # hier Code einfügen
      |
      | def test_f():
      |     assert f(3) == 5
      |     assert f(1) == 1
      |     assert f(100) == 199
      |     return "Tests bestanden!"
      |
      | test_f()

    x-quill

---
> id: step-33

::: .exercise
**Übung**  
Wähle die wahren Aussagen aus.

    x-picker.list
      .item.item.pill.bblue.md Die Anweisung `{py} kontostand = 46.04` weist der Variablen `{py} kontostand` den Wert `{py} 46.04` zu. 
      .item.pill.bblue.md(data-error="not-a-variable") Das Objekt `{py} 33` ist eine Variable. 
      .item.pill.bblue(data-error="mutable") Der Wert einer Variablen kann nicht geändert werden. 
      .item.pill.bblue Variablennamen in Python unterscheiden Groß- und Kleinschreibung.
:::

---

## Typen

> id: types
> section: types

Python hat, wie die meisten Programmiersprachen, eingebaute Typen für die Verarbeitung gängiger Daten wie Zahlen und Text.

[Weiter](btn:next)

---
> id: step-34

### Zahlen

Wie im vorherigen Abschnitt erläutert, kann eine Zahl entweder einen Wert vom Typ `{py} int` oder `{py} float` haben. Wir können ganze Zahlen genau darstellen, während die Speicherung einer Gleitkommazahl als Float [oft eine leichte Rundung erfordert](gloss:rounding).

[Weiter](btn:next)

---
> id: step-35

Eine Zahl, die direkt in ein Python-Programm eingegeben wird, wird als float oder integer gespeichert, je nachdem, ob sie einen Dezimalpunkt enthält. Wenn du also möchtest, dass der Wert 6 als `{py} float` gespeichert wird, musst du `{py} 6.0` schreiben. 

[Weiter](btn:next)

---
> id: step-36

Zahlen können mit den Operatoren `{py} ==,>,<,<=,>=,!=` miteinander verglichen werden. 

::: .exercise
**Übung**  
Was ist der Typ des Objekts, das von `{py} 1 == 2` zurückgegeben wird? [[bool]]
:::

    pre(python-executable)
      | 1 == 2

---
> id: step-37


      
::: .exercise
**Übung**  
`{py} x == 1` ist [[ein Ausdruck, der|eine Anweisung, die]] `{py} True` ("wahr") oder `{py} False` ("falsch") zurückgibt, je nachdem, ob [[das x zugewiesene Objekt gleich 1|der String "x" gleich 1]] ist. Andererseits ist `{py} x = 1` [[eine Anweisung, die|ein Ausdruck, der]] [[dem Objekt x den Wert 1 zuweist|x mit 1 vergleicht]].
:::

---
> id: step-38

### Strings (Zeichenketten)

Textdaten werden durch eine Folge von Zeichen dargestellt, die als **String** bezeichnet wird. Wir können ein Stringobjekt erstellen, indem wir die gewünschte Zeichenfolge in Anführungszeichen einschließen: `{py} a = "das ist ein String"`. Eine solche in Anführungszeichen eingeschlossene Zeichenkette in einem Python-Programm wird als **string literal** bezeichnet - wir bleiben aber auch hier bei unserer Bezeichnung **String**. Strings können auch durch dreifache Anführungszeichen begrenzt werden, was für mehrzeilige Zeichenketten und für Zeichenketten mit Anführungszeichen nützlich sein kann. 

    pre(python-executable)
      | """
      | Das ist eine mehrzeilige Zeichenkette. 
      | Sie kann sogar "Anführungszeichen" enthalten, kein Problem.
      | """
      | 
      | "pre(python-executable)
      | Das ist eine gewöhnliche Zeichenkette. \"Anführungszeichen\" erfordern hier einen Backslash."

[Weiter](btn:next)

---
> id: step-39

Wir können die Anzahl der Zeichen in einem String mit der `{py} len`-Funktion abfragen: `{py} len("Hallo")` gibt [[5]] zurück. 

---
> id: step-40
 
Wir können zwei Strings mit dem Additionsoperator (`{py} +`) verknüpfen: `{py} "Hallo " + "Welt"`. 

[Weiter](btn:next)

---
> id: step-41

Wir können das erste Zeichen in einem String `{py} s` mit dem Ausdruck `{py} s[0]`zurückgeben, das zweite Element mit `{py} s[1]`, und so weiter. Wir können den Teilstring vom vierten bis zum achten Zeichen mit `{py} s[3:9]` erhalten. Beachte, dass die 9 um eins **größer** ist als der Index an dem wir stoppen (bzw. 3 um 1 vor der Stelle, an der wir starten) wollen. 

[Weiter](btn:next)

---
> id: step-42

::: .exercise
**Übung**  
Für welche Werte von `{py} i` und `{py} j` wird der Ausdruck `{py} "Hallo Welt"[i:j] == "o We"` den Wert `{py} True` zurückgeben? i = [[4]] und j = [[8]]
:::

    pre(python-executable)
      | "Hallo Welt"[i:j]

---
> id: step-43
      
::: .exercise
**Übung**  
Wenn entweder `{py} i` oder `{py} j` im Ausdruck `{py} s[i:j]` weggelassen wird (wobei `{py} s` ein String ist), was passiert dann? Experimentiere mit dem obigen Codeblock. 
:::

    x-quill

---
> id: step-44

*Lösung*. Das Weglassen von `{py} i` oder `{py} j` bewirkt dass `{py} i = 0` oder `{py} j = len(s)` gesetzt werden. 

[Weiter](btn:next)

---
> id: step-45

### String-Interpolation (Zeichenketteneinfügung)

Wir können den Wert einer Variablen mit Hilfe der sogenannten *String-Interpolation* in einen String einfügen. Es gibt mehrere Möglichkeiten, das in Python zu bewerkstelligen, aber die wahrscheinlich einfachste Methode ist, den Buchstaben `{py} f` unmittelbar vor das öffnende Anführungszeichen zu setzen. Ein so veränderter String wird als *f-string* ("formattierter String") bezeichnet. Alle Teile eines f-Strings die zwischen geschweiften Klammern stehen werden ausgewertet, und ihre Stringdarstellungen werden an dieser Stelle in den String eingefügt. 

    pre(python-executable)
      | x = 19
      | print(f"""
      | Der Wert des Quotienten x durch 3, 
      | ist {x//3}, und der Rest beträgt {x % 3}.
      | """)

::: .exercise
**Übung**  
Verwende eine String-Interpolation um eine einzelne Codezeile zu schreiben, die `{py} mit 6.2 multipliziert ergibt 12.4` ausgibt, wenn die Variable `{py} A` auf `{py} 2` gesetzt, und `{py} mit 6.2 multipliziert ergibt 18,6`, wenn `{py} A` auf `{py} 3` gesetzt wird. 
:::

    pre(python-executable)
      | A = 2
      | print()

    x-quill

---
> id: step-46

*Lösung*. Der Ausdruck `{py} print(f"mit 6.2 multipliziert ergibt {6.2*A}")` funktioniert. 

[Weiter](btn:next)

---
> id: step-47

### Boolesche Variablen

Ein **bool** ist ein spezieller Typ, dessen einzige Werte `{py} True` ("Wahr") und `{py} False` ("Falsch") sind. Die grundlegenden Operatoren, die verwendet werden können, um boolesche Werte zu kombinieren, sind `{py} and` ("und"), `{py} or` ("oder") und `{py} not` ("nicht"). 

[Weiter](btn:next)

---
> id: step-48
      
::: .exercise
**Übung**  
Wandelt Python Typen um wenn man sie miteinander vergleicht? Mit anderen Worten, gibt `{py} 1 == 1.0` (also der Vergleich von zwei eigentlich gleich großen Integer- und ein Float-Werten) `{py} True` oder `{py} False` zurück? [[True|False]]
:::

    pre(python-executable)
      | 1 == 1,0

---
> id: step-49

*Lösung*. Ja, Python wandelt die Typen für den Gleichheitsvergleich um. Deshalb `{py} gibt 1 == 1.0` den Wert `{py} True` zurück. 

[Weiter](btn:next)

---
> id: step-50

::: .exercise
**Übung**  
Schreibe eine einzeilige [Funktion](gloss:function) , die 3 Boolwerte als Argumente nimmt und `{py} True` zurückgibt, wenn und nur wenn folgendes zutrifft: 

1. Die beiden ersten beiden Argumente sind `{py} True`, oder 
2. Das dritte Argument ist `{py} False`
:::


    pre(python-executable)
      | def f(a,b,c):
      |     pass # hier Code einfügen
      |
      | def test_f():
      |     assert f(True, True, True, True)
      |     assert f(False, True, False)
      |     assert not f(False, True, True, True)
      |     return "Tests erfolgreich abgeschlossen!"
      |
      | test_f()

    x-quill

---
> id: step-51

*Lösung*. Hier ist ein Beispiel für eine einfache Möglichkeit, das umzusetzen: 

``` python
def f(a,b,c):
    return a and b or not c
```

Sei vorsichtig mit Vergleichen der Form `{py} a == True` oder `{py} b == False`. Sie sind [jeweils](gloss:respectively) äquivalent zu einfach nur `{py} a` bzw. `{py} not b`, vorausgesetzt, `{py} a` und `{py} b` sind beide vom Typ bool, da die gesuchte Antwort ja schon von den Variablen selbst geliefert wird. Die kürzeren Versionen werden bevorzugt. 

[Weiter](btn:next)

---
> id: step-52

### Übungen

::: .exercise
**Übung**  

Schreibe einen Code zur Berechnung von $\frac{1}{a+\frac{2}{3}}$. $a$ ist dabei gleich der Anzahl der Zeichen im String `{py} "Semriacher Sennenhunde sind sehr selten selber senil"`

:::

    pre(python-executable)
      | 

    x-quill

---
> id: step-53

*Lösung*. Wir speichern die Länge des angegebenen Strings in einer Variablen `{py} a` und werten den gegebenen Ausdruck wie folgt aus: 

``` python
a = len("Semriacher Sennenhunde sind sehr selten selber senil")
1/(a+2/3)
```

[Weiter](btn:next)

---
> id: step-54

::: .exercise
**Übung**  
Der Ausdruck `{py} 1 < 3` gibt [[True]] zurück, also ein Objekt vom Typ [[bool]]. 
:::

---
> id: step-55

::: .exercise
**Übung**  
Wenn wir s = "Bruno"` setzen `{py}, dann ist `{py} s[:j] == "Bru"` für `{py} j =` [[3]]. 
:::

---

## Bedingungen

> id: conditionals
> section: conditionals

Betrachten wir eine einfache Aufgabe, die von irgendeiner Software am Computer ausgeführt wird, wie z.B. das Hervorheben aller Zeilen in einer Tabelle, die in der dritten Spalte einen Wert größer als 10 haben. Dazu benötigen wir eine neue Funktion die von Programmiersprachen zur Verfügung gestellt wird: wir wollen Code (nämlich den Code, der eine Zeile markiert) nur dann ausführen wenn eine bestimmte Bedingung erfüllt ist, also je nachdem welchen [[bool|int|float]]-Wert von einem Vergleichsoperator (==, <, <=, ...) zurückgegeben wird. Python stellt zu diesem Zweck `{py} if`-Anweisungen zur Verfügung.

---
> id: step-56

### Bedingungen

Wir können eine `{py} if`-Anweisung verwenden, um verschiedene Blöcke anzugeben, die abhängig vom Wert eines booleschen Ausdrucks ausgeführt werden sollen. *Wenn* der Wert True ist mache das, *sonst* (`{py} else`) mache etwas anderes. Die folgende Funktion berechnet beispielsweise das Vorzeichen des eingegebenen Wertes `{py} x`.

    pre(python-executable)
      | def sgn(x):
      |     if x > 0:
      |         return +1
      |     elif x == 0:
      |         return 0
      |     else:
      |         return -1
      |
      | sgn(-5)

[Weiter](btn:next)

---
> id: step-57

Bedingte Ausdrücke können auch als *ternäre (dreigeteilte) Bedingungen*  geschrieben werden.`{py} «Wahr-Wert» if «Bedingung» else «Falsch-Wert»`. Die folgende Version der Funktion `{py} sgn` gibt beispielsweise die gleichen Werte wie die obige zurück, außer für `{py} x == 0`. 

    pre(python-executable)
      | def sgn(x): 
      |     return +1 if x > 0 else -1
      |
      | sgn(-5)

[Weiter](btn:next)

---
> id: step-58

### Übungen

::: .exercise
**Übung**  
Kann der `{py} else` Teil einer `{py} if`-Anweisung weggelassen werden? [[Ja|Nein]] Versuche, das folgende Beispiel auszuführen. 
:::

    pre(python-executable)
      | x = 0.5
      | if x < 0: 
      |     print("x is negative")
      | elif x < 1: 
      |     print("x is between 0 and 1")
      
[Weiter](btn:next)

---
> id: step-59

::: .exercise
**Übung**  
Schreibe eine Funktion namens `{py} my_abs` , die den Absolutbetrag der eingegebenen Zahl berechnet. Ersetze das Schlüsselwort `{py} pass` durch einen entsprechenden Codeblock.
:::

    pre(python-executable)
      | def my_abs(x):
      |     pass # hier Code einfügen
      |
      | def test_abs():
      |     assert my_abs(-3) == 3
      |     assert my_abs(5.0) == 5.0
      |     assert my_abs(0.0) == 0.0
      |     return "Test erfolgreich ausgeführt!"
      |
      | test_abs()

    x-quill

---
> id: step-60

::: .exercise
**Übung**  
Schreibe eine Funktion, die den Quadranten (1, 2, 3 oder 4) zurückgibt, in dem sich der Punkt `{py} (x,y)` befindet. Beachte, dass die Quadranten gegen den Uhrzeigersinn nummeriert sind: Der nordöstliche Quadrant ist Quadrant 1, der nordwestliche Quadrant ist 2, und so weiter. Der Einfachheit halber kannst du davon ausgehen, dass sowohl `{py} x` als auch `{py} y` ungleich Null sind.

Tipp: Dabei solltest du vielleicht verschachtelte `{py} if...else` Blöcke innerhalb eines anderen `{py} if...else` Blocks verwenden. Beachte dabei die unterschiedlichen Einzüge der Blöcke! 
:::

    pre(python-executable)
      | def quadrant(x,y):
      |     pass # hier Code einfügen
      |
      | def test_quadrant():
      |     assert quadrant(1.0, 2.0) == 1
      |     assert quadrant(-13.0, -2) == 3
      |     assert quadrant(4, -3) == 4
      |     assert quadrant(-2, 6) == 2
      |     return "Tests bestanden!"
      |
      | test_quadrant()

    x-quill

---
> id: step-61

*Lösung*. Eine mögliche Lösung: 

    pre(python-executable)
      | 
      | def quadrant(x,y):
      |     if x > 0:
      |         if y > 0:
      |             return 1
      |         else:
      |             return 4
      |     else:
      |         if y > 0:
      |             return 2
      |         else:
      |             return 3
      | 

---

## Funktionen

> id: functions
> section: functions

[Funktionen](gloss:function) können verwendet werden, um Code zu organisieren und *Aufgaben auszulagern*: Sobald eine Funktion geschrieben ist, kann man sich darauf verlassen, dass sie ihre vorgesehene Aufgabe erfüllt, ohne dass der Programmierer darüber nachdenken muss, *wie* sie das macht. Diese konzeptionelle Hilfe ist entscheidend für das Schreiben von wartbarem Code zur Lösung großer, komplexer Probleme. 

[Weiter](btn:next)

---
> id: step-62

Eine gute Faustregel ist, dass eine Funktion ausreichend allgemein sein sollte, um wiederverwendbar zu sein, ohne schon vorhandene Logik zu duplizieren, aber auch so speziell, dass man sie wirklich einsetzen kann. 

::: .exercise
**Übung**  
Wie könnte das Design des folgenden Codes verbessert werden?

``` python
def loesche_ein_anfangs_leerzeichen(S):
    if S[0] == " ":
        return S[1:]
    else:
        return S

def loesche_zwei_anfangs_leerzeichen(S):
    if S[0:2] == "  ":
        return S[2:]
    else:
        return S

def loesche_drei_anfangs_leerzeichen(S):
    if S[0:3] == "  ":
        return S[3:]
    else:
        return S
```
:::

[Weiter](btn:next)

---
> id: step-63

*Lösung*. Wir sollten eine einzige Funktion haben, um die Anzahl der überflüssigen Leerzeichen am Anfang eines Strings zu entfernen. Das obige Design hat das Problem, dass wir herausfinden müssen, wie viele führende Leerzeichen es gibt, bevor wir die entsprechende Funktion aufrufen können, was bedeutet, dass die meiste Arbeit, die eigentlich von der Funktion ausgeführt werden sollte, schon vor dem Aufruf der Funktion ausgeführt werden muss. Dadurch wird die Auslagerung der Arbeit nicht umgesetzt.

[Weiter](btn:next)

---
> id: step-64

### Argumente

Die Objekte, die einer Funktion beim Aufruf übergeben werden, werden als **Argumente** der Funktion bezeichnet. Die Variablen, die die Argumente in der Funktionsdefinition darstellen, werden **Parameter** genannt. Der eingerückte Codeblock, der beim Aufruf der Funktion ausgeführt wird, ist der **Body** der Funktion (Funktionsrumpf).

[Weiter](btn:next)

---
> id: step-65

::: .exercise
**Übung**  
Im folgenden Codeblock ist `{py} s` ein [[Parameter|Argument]], während `{py} "hello"` ein [[Argument|Parameter]] ist.

``` python
def dupliziere(s):
    return s + s

dupliziere("hello")
```
:::

---
> id: step-66

Wir können Parametern **Standardwerte** zuweisen und für diese Parameter die Argumente dann optional (nicht zwingend) beim Aufruf der Funktion angeben.

    pre(python-executable)
      | 
      | def gerade(k, x, d=0):
      |     return k * x + d
      |
      | gerade(2,3) # ergibt 6
      | gerade(5,4,d=2) # ergibt 22

[Weiter](btn:next)

---
> id: step-67

Die Argumente 2, 3, 4 und 5 in diesem Beispiel werden **Positionsargumente** genannt, und `{py} b=2` ist ein **Schlüsselwort-Argument**. 

[Weiter](btn:next)

---
> id: step-68

Wenn der Funktionsteil mit einem String-Literal beginnt, wird dieser String als Dokumentation für die Funktion interpretiert. Dieser **DocString** hilft dir und anderen Benutzern deiner Funktionen, schnell festzustellen, wie sie verwendet werden sollen. Auf die Dokumentation einer Funktion kann in einer Python-Sitzung über die Funktion `{py} help`zugegriffen werden. Beispielsweise gibt `{py} help(print)` den DocString für die eingebaute `{py} print`-Funktion aus.

[Weiter](btn:next)

---
> id: step-69

### Anonyme Funktionen

Eine Funktion kann definiert werden, ohne ihr einen Namen zu geben. Eine solche Funktion gilt als *anonym*. Die Python-[Syntax](gloss:syntax) für anonyme Funktionen verwendet das Schlüsselwort `{py} lambda`. Eine häufige Situation, in der anonyme Funktionen nützlich sein können, ist die Bereitstellung einer Funktion an eine andere als Argument. Zum Beispiel:

    pre(python-executable)
      | def mache_drei_mal(f, x):
      |     return f(f(f(x)))
      |
      | mache_drei_mal(lambda x: x*x, 2)
      
Eine Funktion mit mehreren Argumenten funktioniert ähnlich, wobei die Parameter durch Kommas getrennt sind: Der Additionsoperator + könnte folgendermaßen geschrieben werden `{py} lambda x,y: x + y`. 

[Weiter](btn:next)

---
> id: step-70      
      
::: .exercise
**Übung**  
Schreibe eine Funktion, die zwei Argumente `{py} a` und `{py} b` und eine Funktion `{py} f` übernimmt und `{py} a` zurückgibt, wenn `{py} f(a) < f(b)` und `{py} b` ansonsten. Verwende dann die anonyme Funktionssyntax, um deine Funktion mit zwei Zahlen und der Negationsfunktion $x\mapsto -x$ aufzurufen. 
:::

    pre(python-executable)
      | 

    x-quill

---
> id: step-71

*Lösung*. Eine mögliche Lösung:

``` python
def which_smaller(a, b, f):
    if f(a) < f(b):
        return a
    else:
        return b

which_smaller(4, 6, lambda x: -x)
```
[Weiter](btn:next)

---
> id: step-72
      
### Gültigkeitsbereich

Der **Gültigkeitsbereich** einer Variablen ist der Bereich im Programm, in man sie aufrufen kann. Wenn du beispielsweise `{py} x` in Zeile 413 deiner Datei so definierst, dass es auf `{py} 47` gesetzt wird und einen Fehler erhältst, weil du versucht hast, `{py} x` in Zeile 35 zu verwenden, dann besteht das Problem darin, dass die Variable hier noch nicht *gültig*  ist. 

Eine Variable, die im Hauptteil (main body) einer Datei definiert ist, hat **globalen Gültigkeitsbereich**, was bedeutet, dass sie von ihrem Definitionspunkt aus im gesamten Programm sichtbar ist. 

Eine im Funktionsrumpf definierte Variable befindet sich im **lokalen Gültigkeitsbereich** dieser Funktion. Zum Beispiel: 

    pre(python-executable)
      | def f(x):
      |     y = 2
      |     return x + y
      |
      | y


::: .exercise
**Übung**  
Versuche, eine Funktionsdefinition in eine andere zu verschachteln. Sind Variablen im äußeren Funktionsrumpf in der inneren Funktion verfügbar? Wie ist das im umgekehrten Fall?
:::

    pre(python-executable)
      | def f():
      |     def g():
      |         j = 2
      |         return i
      |     print(j)
      |     i = 1
      |     return g()
      |
      | f()

    x-quill

---
> id: step-73

*Lösung*. Die in der inneren Funktion definierte Variable ist nicht im Gültigkeitsbereich des Funktionsrumpfs der äußeren Funktion, aber die im Funktionsrumpf der äußeren Funktion definierte Variable ist im Gültigkeitsbereich der inneren Funktion.
    
[Weiter](btn:next)

---
> id: step-74

### Testen

Es wird dringend empfohlen, Tests zu deinen Funktionen zu schreiben und zur Verfügung zu stellen. Damit wird bestätigt, dass sich jede Funktion wie erwartet verhält. Dies ist besonders wichtig, wenn deine Codebasis immer größer wird, da Änderungen in einer Funktion zu Problemen in anderen Funktionen führen können, die sie verwenden. Eine Möglichkeit zum Testen der Funktionen in deiner gesamten Codebasis hilft dir dabei, diese Fehler schnell zu entdecken, bevor sie zu Schäden führen.

Eine gängige Methode dazu (die du in diesem Kurs bereits mehrfach gesehen hast) ist das Schreiben von Funktionen, deren Namen mit *`{py} test_`* beginnen und die `{py} assert`-Anweisungen enthalten. Eine `{py} assert`-Anweisung löst einen Fehler aus, wenn der darauf folgende Ausdruck `{py} False` zurück gibt. Man kann die Testfunktionen direkt ausführen, oder man kann ein Tool wie [pytest](https://pytest.org) verwenden, um alle Testfunktionen in der Codebasis zu finden und auszuführen. 

    pre(python-executable)
      | def space_concat(s,t):
      |     """
      |     Verkettung der Strings s und t, wobei ein Leerzeichen
      |     zwischen ihnen eingefügt wird, wenn s mit einem Nicht-Leerzeichen endet
      |     und t mit einem Nicht-Leerzeichen beginnt
      |     """
      |     if s[-1] == " " or t[0] == " ":
      |         return s + t
      |     else:
      |         return s + " " + t
      |
      | def test_space_concat():
      |     assert space_concat("foo", "bar") == "foo bar"
      |     assert space_concat("foo ", "bar") == "foo bar"
      |
      | test_space_concat()
      | space_concat("foo", "bar")
      
::: .exercise
**Übung**  
Die obigen Testfälle decken nicht die *ungünstige* Situation ab, dass einer der Strings leer ist. Liefert die Funktion korrekte Werte für diese ungünstigen Fälle? [[Nein|Ja]] Füge dafür Testfälle hinzu und verbessere die Funktion so, dass diese bestanden werden.
:::

    x-quill

---
> id: step-75

*Lösung*. Wir überprüfen ob die Strings leer sind bevor wir die letzten bzw. ersten Zeichen überprüfen. Mit `{py} or` kann das Problem schnell gelöst werden, weil wenn der erste bool-Wert in einer `{py} or` Operation `{py} True` ist, wird der zweite erst gar nicht ausgewertet.

    pre(python-executable)
      | def space_concat(s,t):
      |     """
      |     Verkettung der Strings s und t, wobei ein Leerzeichen
      |     zwischen ihnen eingefügt wird, wenn s mit einem Nicht-Leerzeichen endet
      |     und t mit einem Nicht-Leerzeichen beginnt.
      |     """
      |     if s == "" or t == "" or s[-1] == " " or t[0] == " ":
      |         return s + t
      |     else:
      |         return s + " " + t
      |
      | def test_space_concat():
      |     assert space_concat("foo", "bar") == "foo bar"
      |     assert space_concat("foo ", "bar") == "foo bar"
      |     assert space_concat("foo", "") == "foo"
      |     assert space_concat("", "bar") == "bar"

### Übungen

::: .exercise
**Übung**  
Schreibe eine Funktion, die zwei Strings als Eingabe akzeptiert und die Verkettung dieser beiden Strings in alphabetischer Reihenfolge zurückgibt.

_Tipp_: Was meinst du, mit welchem Operator Strings alphabetisch verglichen werden können.
:::

    pre(python-executable)
      | def alphabetical_concat(s,t):
      |     pass # hier Code einfügen
      |
      | def test_concat(): 
      |     assert alphabetical_concat("buchstaben", "suppe") == "buchstabensuppe"
      |     assert alphabetical_concat("socken", "rote") == "rotesocken"
      |     return "Tests erfolgreich bestanden!"
      |
      | test_concat()



    x-quill

---
> id: step-76

*Lösung*. 

    pre(python-executable)
      | def alphabetical_concat(s,t):
      |     if s < t:
      |         return s + t
      |     else:
      |         return t + s
      |
      | def test_concat(): 
      |     alphabetical_concat("buchstaben", "suppe") == "buchstabensuppe"
      |     alphabetical_concat("food", "brain") == "brainfood"
      |     return "Tests passed!"
      |
      | test_concat()

---

## Pakete

> id: packages
> section: packages

Ein [**Paket**](gloss:package) ist eine Sammlung von Python-Dateien, die Funktionen zur Verfügung stellen, die über die Kernfunktionen hinausgehen, die in jedem Python-Programm verfügbar sind. Pakete bewirken eine Trennung der Anliegen auf Gemeindeebene: Jemand anderes löst ein Problem von allgemeinem Interesse, und dann können Sie seine Arbeit nutzen und sich darauf konzentrieren, es auf das anstehende Problem anzuwenden.

Many Python packages are available in every standard distribution of Python and can be used without having to worry about whether they're installed. These packages make up the **standard library**. To see a list of standard library packages, visit the standard library page of the [Python documentation](https://docs.python.org/3/library/). Here's an example showing how to import the  `{py} math` package and use the `{py} sqrt` function it contains: 

    pre(python-executable)
      | import math
      | math.sqrt(3)

Note that we access names like `{py} sqrt` provided by the package using the dot [syntax](gloss:syntax) `{py} math.sqrt`. This is common practice, and it's a good idea because if functions are called in a way that makes it clear what package they came from, then (1) you can use the same name in multiple packages, and (2) you can easily identify which package that is supplying each function. We can also import individual functions and skip the dot syntax:

    pre(python-executable)
      | from math import sqrt
      | sqrt(3)

Sometimes a package contains a **subpackage** which must itself be accessed with dot syntax:

    pre(python-executable)
      | from numpy.random import standard_normal
      | standard_normal()
      
[Continue](btn:next)

---
> id: step-77

### Scientific computing packages in Python

Here are some of the most important scientific computing packages (along with very brief code snippets to give you a sense of what calling the packages looks like in practice): 

**NumPy**. Provides multi-dimensional arrays (like vectors, matrices, and higher-order arrays). 

    pre(python-executable)
      | import numpy as np
      | np.random.standard_normal((5,5)) # randomly fill a 5 × 5 matrix
      | np.full((3,3),7) # make a 3 × 3 matrix full of 7's

Note that we import `{py} numpy` with the alias `{py} np` for brevity. 

**Pandas**. Provides support for tabular data. 

    pre(python-executable)
      | import pandas as pd
      | iris = pd.read_csv("http://bit.ly/iris-dataset")
      | iris

**SciPy**. Provides scientific computing tools for optimization, numerical integration, linear algebra, statistics, etc.

    pre(python-executable)
      | from scipy.optimize import minimize
      | minimize(lambda x: x*(x-1), 1.0) # start from 1 and minimize x(x-1)

**Matplotlib**. Standard plotting package in Python. (_Note_: run the cell below twice to get the graph to display.)

    pre(python-executable)
      | import matplotlib.pyplot as plt
      | import numpy as np
      | plt.plot(np.cumsum(np.random.standard_normal(1000)))

**SymPy**. Pure math tools like symbolic integration/differentiation, number theory, etc.

    pre(python-executable)
      | from sympy import symbols, Eq, solve
      | x = symbols("x")
      | y = symbols("y")
      | solve([Eq(x + 5*y, 2), Eq(-3*x + 6*y, 15)], [x, y])

The example above solves the system of equations:
``` latex
  x + 5y &= 2 \\\\ 
  -3x + 6y &= 15
```
for $x$ and $y$.

### Übungen 

::: .exercise
**Exercise**  
 To import just the `{py} arcsin` function from `{py} numpy`, we would use what statement? 
:::

    x-quill

---
> id: step-78

*Solution.* `{py} from numpy import arcsin`

[Weiter](btn:next)

---
> id: step-79

::: .exercise
**Exercise**  
 To import `{py} sympy` with alias `{py} sp`, we would use what statement?
:::

    x-quill

---
> id: step-80

*Solution* `{py} import sympy as sp`

[Weiter](btn:next)

---
> id: step-81

::: .exercise
**Exercise**  
To import the standard library package `{py} itertools` (with no alias), we would use what statement?
:::

    x-quill

---
> id: step-82

*Solution* `{py} import itertools`

[Weiter](btn:next)

---

## Klassen

> id: classes
> section: classes

Viele Python-Funktionen verwenden die übliche Funktions[syntax](gloss:syntax), wie `{py} len("hello")`. Viele andere Funktionen werden jedoch mit einer anderen Syntax aufgerufen, wobei zuerst ein *Objekt* kommt: 

    pre(python-executable)
      | "hello".capitalize()

These functions are called **methods**. For example, `{py} capitalize` is a string method. To understand how methods work in the language, it's helpful to see what they look like at the point of definition. 

[Weiter](btn:next)

---
> id: step-84

Suppose you want to write a program which keeps track of the albums you own. Each album is associated with several data, like the name of the album, the year it came out, the number of tracks, etc. You could store all these data by assigning them to different variables, but that becomes untidy very quickly. For example, you will frequently want to pass an album to a function, and you don't want that function to require a long list of parameters just because the album has a lot of data associated with it. 

[Weiter](btn:next)

---
> id: step-85

What you want is to be able to treat each album as its own Python object, with all its associated data stored inside. In other words, you want an `{py} Album` type. You can do that with the `{py} class` keyword (this block won't return anything): 

    pre(python-executable)
      | class Album(object):
      |     def __init__(self, name, artist, year, length): 
      |         self.name = name
      |         self.artist = artist
      |         self.year = year
      |         self.length = length
      | 
      |     def numYearsAgo(self, currentYear):
      |         "Return the number of years since album was released"
      |         return currentYear - self.year
      
[Continue](btn:next)

---
> id: step-86

A function defined in the block indented below `{py} class Album(object):` is called a **method** of the class `{py} Album`. The *`{py} \_\_init\_\_`* method has a special role: Python calls it whenever `{py} Album` is called as a function to create an **instance** of the class `{py} Album`. 

    pre(python-executable)
      | A = Album("Abbey Road", "The Beatles", 1969, "47:23")
      | A



The first parameter, customarily called `{py} self`, refers to the object being created. The four lines in the init method above assign values to **attributes** which may be accessed later using the dot [syntax](gloss:syntax), like `{py} A.name` or `{py} A.artist`. 

Dot syntax is also used to access other methods like `{py} numYearsAgo`.

``` python
A.numYearsAgo(2019)
```

The object appearing before the dot is implicitly supplied as the first argument to the method. Therefore, `{py} A.numYearsAgo(2019)` at call time corresponds to `{py} numYearsAgo(A, 2019)` at the point of definition. In fact, you can use the latter syntax if you want, because methods are also accessible using dot syntax on the class name: 
`{py} Album.numYearsAgo(A, 2019)`. 

::: .exercise
**Exercise**  
Confirm that `{py} "hello".capitalize()` does give the same value as `{py} str.capitalize("hello")`. 
:::

    pre(python-executable)
      | 

[Weiter](btn:next)

---
> id: step-87

::: .exercise
**Exercise**  
In the expression `{py} "".join("hello")`, the method `{py} join` has [[2|1|0|3]] arguments. 
:::

---
> id: step-88

*Lösung*. There are two arguments: the first is the empty string, and the second is `{py} "hello"`. 
      
[Weiter](btn:next)

---
> id: step-89

::: .exercise
**Exercise**  
Implement a class called `{py} Fraction` which represents a ratio of two positive integers. You should reduce the fraction in your *`{py} \_\_init\_\_`* method. Your `{py} Fraction` type should include a method called `{py} \_\_add\_\_` which adds two fractions and an `{py} \_\_eq\_\_` which checks whether two fractions are equal. (These methods will be automatically used by the addition and equality operators.)
:::

    pre(python-executable)
      | from  math import gcd
      | # add code here
      | 
      | def test_Fraction():
      |     assert Fraction(1,2) + Fraction(1,3) == Fraction(5,6)
      |     assert Fraction(2,4) + Fraction(4,8) == Fraction(3,3)
      |     return "Test passed!"
      |
      | test_Fraction()

    x-quill

---
> id: step-90

*Lösung*. We divide by the gcd in the init method, and we define the other two methods according to the rules of arithmetic:

    pre(python-executable)
      | from math import gcd
      |
      | class Fraction(object):
      |     def __init__(self, num, denom):
      |         d = gcd(num, denom)
      |         self.num = num//d
      |         self.denom = denom//d
      |   
      |     def __add__(self, other):
      |         return Fraction(self.num * other.denom + self.denom * other.num, 
      |                        self.denom * other.denom)
      |      
      |     def __eq__(self, other):
      |         return self.num == other.num and self.denom == other.denom
      |
      | def test_Fraction():
      |     assert Fraction(1,2) + Fraction(1,3) == Fraction(5,6)
      |     assert Fraction(2,4) + Fraction(4,8) == Fraction(3,3)
      |     return "Test passed!"
      |
      | test_Fraction()

---

## Lists and Tuples

> id: lists-and-tuples
> section: lists-and-tuples

Let's revisit the spreadsheet example we discussed earlier: suppose you're writing a spreadsheet application and you want to introduce some functionality for highlighting every row whose third-column value is greater than 10: 

    table
      tr
        td: .pill.grey 20
        td: .pill.grey 16
        td: .pill.grey 2
        td: .pill.grey 1
        td: .pill.grey 19
      tr
        td: .pill.blue 9
        td: .pill.blue 12
        td: .pill.blue 15
        td: .pill.blue 1
        td: .pill.blue 19
      tr
        td: .pill.grey 7
        td: .pill.grey 2
        td: .pill.grey 1
        td: .pill.grey 15
        td: .pill.grey 4
      tr
        td: .pill.blue 19
        td: .pill.blue 6
        td: .pill.blue 16
        td: .pill.blue 4
        td: .pill.blue 7
      tr
        td: .pill.grey 3
        td: .pill.grey 14
        td: .pill.grey 3
        td: .pill.grey 1
        td: .pill.grey 1
      tr
        td: .pill.blue 16
        td: .pill.blue 5
        td: .pill.blue 15
        td: .pill.blue 6
        td: .pill.blue 6
      tr
        td: .pill.grey 14
        td: .pill.grey 9
        td: .pill.grey 7
        td: .pill.grey 18
        td: .pill.grey 15
      tr
        td: .pill.grey 15
        td: .pill.grey 9
        td: .pill.grey 3
        td: .pill.grey 9
        td: .pill.grey 16
      tr
        td: .pill.blue 13
        td: .pill.blue 6
        td: .pill.blue 13
        td: .pill.blue 10
        td: .pill.blue 20
      tr
        td: .pill.grey 10
        td: .pill.grey 14
        td: .pill.grey 5
        td: .pill.grey 8
        td: .pill.grey 8
      tr
        td: .pill.blue 4
        td: .pill.blue 13
        td: .pill.blue 16
        td: .pill.blue 15
        td: .pill.blue 9
      tr
        td: .pill.grey 16
        td: .pill.grey 9
        td: .pill.grey 4
        td: .pill.grey 14
        td: .pill.grey 1
      tr
        td: .pill.grey 17
        td: .pill.grey 9
        td: .pill.grey 4
        td: .pill.grey 3
        td: .pill.grey 8
      tr
        td: .pill.grey 2
        td: .pill.grey 6
        td: .pill.grey 4
        td: .pill.grey 6
        td: .pill.grey 14
      tr
        td: .pill.blue 15
        td: .pill.blue 8
        td: .pill.blue 14
        td: .pill.blue 3
        td: .pill.blue 14
      tr
        td: .pill.grey 14
        td: .pill.grey 19
        td: .pill.grey 8
        td: .pill.grey 17
        td: .pill.grey 10
      tr
        td: .pill.grey 18
        td: .pill.grey 8
        td: .pill.grey 9
        td: .pill.grey 5
        td: .pill.grey 9
      tr
        td: .pill.grey 4
        td: .pill.grey 4
        td: .pill.grey 5
        td: .pill.grey 5
        td: .pill.grey 8
      tr
        td: .pill.grey 11
        td: .pill.grey 8
        td: .pill.grey 1
        td: .pill.grey 14
        td: .pill.grey 2
      tr
        td: .pill.blue 12
        td: .pill.blue 11
        td: .pill.blue 13
        td: .pill.blue 19
        td: .pill.blue 7

We definitely don't want to think of 100 variable names for the 100 values in the table, and we don't want to write a line of code for each row. What we need is a way to store all of the rows (or columns) in an object designed to contain many objects. Python provides several such **compound data structures**, and in this section we will learn about two: **Listen** und **Tupel**. 

[Weiter](btn:next)

---
> id: step-91

### Listen

A `{py} list` in Python is a compound data type for storing a finite ordered sequence of Python objects. Lists are **mutable**, meaning that they can be changed.

The simplest way to produce a list in a Python program is with a **list literal**, which requires listing the objects separated by commas and delimited by square brackets: 

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | x = 5
      | myOtherList = [1, x, x, 2]
      | myOtherList
      
::: .exercise
**Exercise**  
What happens to `{py} myOtherList` in the example above if a different value is assigned to `{py} x` *after* `{py} myOtherList` is created? [[the list doesn't change|the list changes]]
:::

---
> id: step-92

*Lösung*. The list doesn't change. The object associated with the variable `{py} x` is retrieved when the list is created, and after that point the list is no longer connected to the name `{py} x`. 

[Weiter](btn:next)

---
> id: step-93

Like strings, lists can be **indexed** to obtain their elements. Indexes in Python begin at 0: 

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | myList[0] # returns 1
      | myList[3] # returns 7
      
[Continue](btn:next)

---
> id: step-94

Negative indices can be used to count from the end:

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | i = -2
      | myList[i]


  
If we set `{py} i` to the negative number [[-3]], then `{py} myList[i]` would return `{py} "flower"`. 

---
> id: step-95

Sublists can be extracted by **slicing**. Indexing a list with `{py} [i:j]` returns the portion of the list from the `i`th element to the `(j-1)`st element. 

    pre(python-executable)
      | myList = [1, "flower", True, 7]
      | myList[0:2]

::: .exercise
**Exercise**  
If `{py} i` = [[1]] and `{py} j` = [[3]], then `{py} myList[i:j]` is equal to `{py} ["flower", True]`. 
::: 

---
> id: step-96

The start or stop value of a slice can be omitted, in which case it defaults to the beginning or end of the list, respectively. 

    pre(python-executable)
      | L = list(range(10,20)) # returns [10,11,12,...,19]
      | L[2:] # returns [12,13,...,20]
      | L[:4] # returns [10,11,12,13]
      
[Continue](btn:next)

---
> id: step-97

Slices can include a *step* value after a second colon. For example, *`{py} L[1::10::2]`* returns the elements of `{py} L` at positions 1, 3, 5, 7, and 9. The step value is often used with omitted start and stop values: 

    pre(python-executable)
      | list(range(100, 200))[::2]
      
[Continue](btn:next)

---
> id: step-98

::: .exercise
**Exercise**  
What step value can be used to *reverse* a list? [[-1]] (Hint: you can reason it out!)
:::

    pre(python-executable)
      | [2,4,6,8][::k]

[Weiter](btn:next)

---
> id: step-99

*Lösung*. Going in reverse order through a list corresponds to stepping by $-1$ each time. Setting `{py} k = -1` in the code block above, we see that `{py} [::-1]` does indeed reverse the list. Apparently the start and stop values for a list `{py} L` implicitly are implicitly set to `{py} -1` and `{py} -len(L)` when a negative step value is used. 

[Weiter](btn:next)

---
> id: step-100

Like strings, lists can be concatenated with the `{py} +` operator. 

    pre(python-executable)
      | [1,2,3] + [4,5,6,7]

::: .exercise
**Exercise**  
Write a [function](gloss:function) which takes as arguments a list `{py} L` and a positive integer `{py} n` and rotates `{py} L` by `{py} n` positions. In other words, every element of the list should move forward `{py} n` positions, wrapping around to the beginning if it goes off the end of the list. 
:::

    pre(python-executable)
      | def rotate(L, n):
      |     "Cyclically shift the elements of L by n positions"
      |     # add code here
      |
      | def test_rotate():
      |     assert rotate([1,2,3],1) == [3,1,2]
      |     assert rotate([1,2,3],2) == [2,3,1]      
      |     assert rotate([1,2,3,4,5],8) == [3,4,5,1,2]
      |     return "Tests passed!"
      |
      | test_rotate()

    x-quill

---
> id: step-101

*Lösung*. We figure out where the list needs to be split and concatenate the two resulting sublists in the opposite order:

    pre(python-executable)
      | def rotate(L, n):
      |     "Cyclically shift the elements of L by n positions"
      |     k = len(L) - n % len(L)
      |     return L[k:] + L[:k]

[Weiter](btn:next)

---
> id: step-102

Lists may be modified by combining indexing with assignment:

    pre(python-executable)
      | L = [4,-3,2]
      | L[0] = 1
      | L[1:3] = [6,3]
      | L

::: .exercise
**Exercise**  
Write a line of code which sets every even-indexed entry of a list `{py} L` to zero. Note that you can get a list of `{py} n` zeros with `{py} [0] * n`.
:::

    pre(python-executable)
      | L = list(range(100))

    x-quill

---
> id: step-103

*Lösung*. `{py} L[::2] = [0] * (len(L)//2)`

[Weiter](btn:next)

---
> id: step-104

The `{py} list` class has 11 ordinary [methods](gloss:method) (that is, methods that don't have the double underscores in the name):

    pre(python-executable)
      | L = [1,2,3]
      | L.append(4) # add an element to the end
      | L.clear() # remove all items from list
      | L.copy() # return a copy of the list
      | L.extend([5,6,7]) # add elements to the end
      | L.index(6) # find index of list entry
      | L.insert(3,"hey") # insert object before index
      | L.pop(index=1) # remove object at given index
      | L.remove("hey") # remove first occurrence of "hey"
      | L.reverse()
      | L.sort()

If you forget these methods, you can access them in an interactive session by running `{py} dir(list)`. 

Note that each of these methods changes the list `{py} L`. They do not return a new list: 

    pre(python-executable)
      | L = [1,2,3]
      | return_val = L.reverse()
      | print(type(return_val))
      | print(L)

::: .exercise
**Exercise**  
Explain the errors in the code below (there are two). 

``` python
def remove_fives(L):
    "Removes instances of 5 from a list"
    return L.remove("5")

print(remove_fives(["1", "5", "5", "10"]))    
```
:::

    x-quill

---
> id: step-105

*Lösung*. The `{py} remove` method only removes one instances of `{py} "5"` (the first one). Also, this method modifies the argument supplied to the function; it does not return new list with the `{py} "5"` removed.

[Weiter](btn:next)

---
> id: step-106

### List comprehensions

Two of the most common ways of generating one list from another are (1) applying a given function to every element of the original list, and (2) retaining only those elements of the original list which satisfy a given criterion. These two operations are called **map** and **filter**, respectively. 

``` python
def square(x):
    return x*x

list(map(square, range(5))) # returns [0, 1, 4, 9, 16]

def iseven(x):
    return x % 2 == 0      

list(filter(iseven, range(5))) # returns [0,2,4]
```

The extra calls to `{py} list` in the examples above are required to see the result because `{py} map` and `{py} filter` are *lazy*: they return objects which *promise* to perform the specified calculation when it's needed. 

Python provides a convenient [syntax](gloss:syntax) for both mapping *and* filtering: the **list comprehension**. It's essentially a programming version of set builder notation. For example, to square the even numbers from 0 to 4, we can use the following expression: 

    pre(python-executable)
      | [x**2 for x in range(5) if x % 2 == 0]

[Weiter](btn:next)

---
> id: step-107

Let's break this example down step-by-step: the first value of `{py} range(5)` is assigned to the variable `{py} x`, and then the `{py} if` expression is evaluated. If it's true, the expression `{py} x**2` is evaluated and stored as the first value of the list that is to be returned. Then the second value of `{py} range(5)` is assigned to `{py} x`, the condition is evaluated, and so on. 

::: .exercise
**Exercise**  
Write a list comprehension which returns a list whose kth entry is the last digit of the kth three-digit prime number.
:::

    pre(python-executable)
      | from sympy import isprime

    x-quill

---
> id: step-108

*Lösung*. Eine mögliche Lösung:

    pre(python-executable)
      | from sympy import isprime
      | [str(k)[-1] for k in range(100,1000) if isprime(k)]

[Weiter](btn:next)

---
> id: step-109

::: .exercise
**Exercise**  
Write a list comprehension which takes a list of lists and returns only those lists whose second element has a least five elements. 
:::

    pre(python-executable)
      | records = [[3, "flower", -1], [2, "rise", 3], [0, "basket", 0]]

    x-quill

---
> id: step-110

*Lösung*. Here's one solution:

    pre(python-executable)
      | [record for record in records if len(record[1]) >= 5]

[Weiter](btn:next)

---
> id: step-111

### Tupel

Tuples are very similar to lists, except that tuples are [immutable](gloss:immutable).

    pre(python-executable)
      | 
      | row = (22,2.0,"tomato")
      | row[2] # returns "tomato"
      | row[2] = "squash" # throws TypeError

Programmers tend to use tuples instead of lists in situations where **position** in the tuple carries more meaning than **order**. For example, perhaps the tuple assigned to `{py} row` above describes a row of plants in a garden, with the three numbers indicating the number of plants, the number of weeks since they were planted, and the type of plant. We could have chosen some other order for those three values, as long as we're consistent about which position corresponds to which value. By contrast, the 22 heights of the plants on that row would typically be stored in a *list*, since the list order corresponds to something meaningful in that case (namely, the order of the plants in the row).

[Weiter](btn:next)

---
> id: step-112

Functions often return multiple values by returning a tuple containing those values. You can access individual elements of a tuple without having to index the tuple using *tuple unpacking*: 

    pre(python-executable)
      | 
      | mycolor = (1.0,1.0,0.44)
      | r, g, b = mycolor
      | b 

The convention in Python for values you don't want to store is to assign them to the variable whose name is just an underscore. That way you don't have to think of names for those variables, and you signal to anyone reading your code that you are not using those values.

[Weiter](btn:next)

---
> id: step-113

Tuple unpacking can be combined with list comprehension syntax. If we want to extract the first element from each tuple in a list of triples, for example, we can do that as follows:

    pre(python-executable)
      | L = [(1,2,3),(4,5,6),(7,8,9)]
      | [a for (a,_,_) in L]

The value 1 is assigned to `{py} a`, the value 2 is assigned to the underscore variable, and then the value 3 is also assigned to the underscore variable (this overwrite is no problem since we aren't using that value anyway). Then `{py} a` is evaluated as the first element in the new list, and the process repeats for the remaining triples in the list.

::: .exercise
**Exercise**  
Write a list comprehension which adds the first two elements of each tuple in `{py} L`. (So for the example above, the resulting list should be `{py} [3, 9, 15]`.)
:::

    pre(python-executable)
      | 

    x-quill

---
> id: step-114

*Lösung*. Same idea: 

    pre(python-executable)
      | L = [(1,2,3),(4,5,6),(7,8,9)]
      | [a+b for (a,b,_) in L]

[Weiter](btn:next)

---
> id: step-115

::: .exercise
**Exercise**  
The fractional part of a positive real number $x$ is the part after the decimal point: it's defined to be the positive difference between $x$ and the greatest integer which is less than or equal to $x$. You can find the fractional part of `{py} x` in Python with the expression `{py} x - int(x)`. 

Find the fractional parts of the first 100 positive integer multiples of $\pi$. Use the function `{py} extrema` (defined below) on the resulting array to find its least and greatest values. Find the ratio of the greatest value to the least. 
:::

    pre(python-executable)
      | from numpy import pi
      | 
      | def extrema(L):
      |     "Return (min,max) of L"
      |     m = L[0]
      |     M = L[0]
      |     for element in L:
      |         if element > M:
      |             M = element
      |         elif element < m:
      |             m = element
      |     return (m,M)

    x-quill

---
> id: step-116

*Lösung*. We use tuple unpacking to extract the min and max values from the tuple returned by the `{py} extrema` function.

    pre(python-executable)
      | m,M = extrema([pi*k-int(pi*k) for k in range(1,101)])
      | M/m

The result is about 56.08. 

[Weiter](btn:next)

---
> id: step-117

A common pattern for generating new arrays combines list comprehension, tuple unpacking, and the function `{py} zip`. The `{py} zip` function takes two arrays and returns a single array of pairs of corresponding entries (or three arrays, in which case it returns an array of triples, etc.). Zum Beispiel, 

``` python 
zip(["a", "b", "c"], [1, 2, 3])
```

returns an object which is equivalent to `{py} [("a", 1), ("b", 2), ("c", 3)]`. 

If we have three vectors $A$, $B$, and $C$ of equal length, then the vector sum $A + B + C$ can be computed using the expression `{py} [a + b + c for (a,b,c) in zip(A,B,C)]`. 

::: .exercise
**Exercise**  
Suppose that $H$ is a list which stores the heights of 100 cylinders and $R$ is a list which stores their radii (in the same order). Write a [list comprehension](gloss:listcomp) which returns a list containing the volumes of these cylinders. 
:::

    pre(python-executable)
      | H = [1, 2, 3]
      | R = [0.8, 1.0, 1.2]

    x-quill

---
> id: step-118

*Lösung*. We zip `{py} H` and `{py} R` and use the volume formula $\pi r^2 h$: 

    pre(python-executable)
      | from numpy import pi
      | H = [1, 2, 3]
      | R = [0.8, 1.0, 1.2]
      | [pi*r*r*h for (h,r) in zip(H,R)]

[Weiter](btn:next)

---
> id: step-119
      
### Übungen 

::: .exercise
**Exercise**  
(Try doing this one without executing any code.) What will the value of `{py} L` be after the following block is executed?  [[(4,1,2,7,3,-1,8) | (4,1,2,7,3,-1) | (4,2,1,7,3,-1,8)]]

``` python
L = [4, 8, 2]
L.append(7)
L.extend([3,-1,8])
L.insert(2, 1)
L.remove(8)
L = tuple(L)
```
:::

[Weiter](btn:next)

---
> id: step-120

::: .exercise
**Exercise**  
Write a function which takes a matrix `{py} M` and an index `{py} i` and returns the $i$th column of `{py} M`. Assume that `{py} M` is represented as a list of lists, where each list represents a row. 
:::

    pre(python-executable)
      | def select_col(M, i):
      |     pass # add code here
      |
      | def test_select_col():
      |     assert select_col([[1,2],[3,4]],1) == [2,4]
      |     assert select_col([[7,8],[8,-2],[3,4]],1) == [8,-2,4]
      |     return "Tests passed!"
      |
      | test_select_col()

    x-quill

---
> id: step-121

*Lösung*. We use a list comprehension to select the appropriate entry from each row. 

    pre(python-executable)
      | def select_col(M, i):
      |     return [row[i] for row in M]
      |
      | def test_select_col():
      |     assert select_col([[1,2],[3,4]],1) == [2,4]
      |     assert select_col([[7,8],[8,-2],[3,4]],1) == [8,-2,4]
      |     return "Test passed!"
      |
      | test_select_col()

[Weiter](btn:next)

---
> id: step-122      

::: .exercise
**Exercise**  
Write a function which reverses the words in a sentence. For simplicity, you may assume that the sentence does not contain punctuation.

_TIPP: The string methods `{py} join` and `{py} split` might be helpful. You can see the documentation for these methods with `{py} help(str.join)` and `{py} help(str.split)`. 
:::

    pre(python-executable)
      | def reverse_words(sentence):
      |     pass # add code here
      |
      | def test_reverse_words():
      |     assert reverse_words("The quick brown fox") == "fox brown quick The"
      |     assert reverse_words("") == ""
      |     return "Tests passed!"
      |
      | test_reverse_words()

    x-quill

---
> id: step-123

*Lösung*. We use the string method `{py} split`, which splits a string on a given character. This gives us a list of the words in the sentence, which we can reverse by indexing with a negative step and rejoin with the `{py} join` method.

    pre(python-executable)
      | def reverse_words(sentence):
      |     return " ".join(sentence.split(" ")[::-1])

---
## Sets und Dictionaries

> id: sets-and-dictionaries
> section: sets-and-dictionaries

### Sets

**Sets** are unordered collections of unique values. The main advantage of having a special type for sets is that the design of the data structure can be optimized for membership checking. Figuring out whether a given value is in a list requires going through each element in the list, so the amount of time it takes increases with the length of the list. By contrast, checking membership in a set can be done very quickly even if the set is large. 

    pre(python-executable)
      | A = [1,2,3]
      | S = set(A)
      | 2 in S # evaluates to true
      | S.remove(2) # removes 2
      | S.add(11) # puts 11 in the set
      | 2 in S # evaluates to False now
 
::: .exercise
**Exercise**  
Make a set which contains the first 10,000 prime numbers.

_TIPP: It suffices to look for primes among the first 110,000 integers. Compare how long it takes to check whether a given number is in that set to the time it takes to compute whether the number is prime using `{py} sympy.isprime`. 

_Note 1_: The most reliable and efficient way to figure out how the `{py} timeit` function works is to [[run help(timeit)|try it on different examples and guess|ask on StackOverflow]]. 

_Note 2_: The computation below takes some time to run (20 seconds, say). It returns a tuple when it's done. 
::: 

    pre(python-executable)
      | import timeit
      | SETUP = """
      | from sympy import isprime
      | primes = [] # add your code
      | primesSet = set(primes)
      | """
      | a = timeit.timeit("98779 in primes", setup = SETUP)
      | b = timeit.timeit("98779 in primesSet", setup = SETUP)
      | c = timeit.timeit("isprime(98779)", setup = SETUP)
      | a,b,c

    x-quill

---
> id: step-124

*Lösung*. To get exactly 10,000 primes, we index the list obtained by filtering out the composite numbers:

    pre(python-executable)
      | import timeit
      | SETUP = """
      | from sympy import isprime
      | primes = [k for k in range(2,110_000) if isprime(k)][:10000]
      | primesSet = set(primes)
      | """
      | a = timeit.timeit("98779 in primes", setup = SETUP)
      | b = timeit.timeit("98779 in primesSet", setup = SETUP)
      | c = timeit.timeit("isprime(98779)", setup = SETUP)
      | a,b,c

Put the three methods in order from fastest to slowest: 

    x-sortable
      .item.md(data-index="2") List membership checking
      .item.md(data-index="0") Set membership checking
      .item.md(data-index="1") Computing from scratch

---
> id: step-125

### Wörterbücher

The internal mechanism that sets use to check membership extremely fast is also useful when the information you want to retrieve is more complex than just `{py} True` or `{py} False`. 

For example, suppose you want to store a collection of color names together with the [RGB values](https://en.wikipedia.org/wiki/RGB_color_model) for each one. We'll store the names as [[strings|floats|ints]] and the RGB triples as [[tuples|strings|floats]]. 

---
> id: step-126

It's possible to do this by putting the names in a list and the values in a list of the same length: 

``` python
names = ["fuchsia", "firebrick", "goldenrod"]
rgbs = [(256, 0, 256), (178, 34, 34), (218, 165, 32)]
```

However, this solution gets very tedious quickly. For example, modifying this structure requires [[modifying both lists|modifying at least one of the lists]]. 

---
> id: step-127

The Python data structure tailored to the problem of encoding a map from one finite set to another is called a **dictionary**. Dictionary literals consist of a comma separated list of the desired input-output pairs (with each input and output separated by a colon) delimited by curly braces. For example, the dictionary encoding the map described above looks like this:

    pre(python-executable)
      | rgb = {
      |   "fuchsia": (256, 0, 256),
      |   "firebrick": (178, 34, 34),
      |   "goldenrod": (218, 165, 32)
      | }

The domain elements `{py} "fuchsia"`, `{py} "firebrick"` and `{py} "goldenrod"` are called the **keys** of the dictionary, and the codomain elements `{py} (256,0,256)`, `{py} (178,34,34)`, and `{py} (218,165,32)` are called the **values**. 

We can also form new dictionaries from lists of pairs using the `{py} dict` function:

``` python
dict([
  ("fuchsia", (256, 0, 256)),
  ("firebrick", (178, 34, 34)),
  ("goldenrod", (218, 165, 32))
])
```

[Weiter](btn:next)

---
> id: step-128

We can perform a dictionary lookup using indexing [syntax](gloss:syntax): `{py} rgb["fuchsia"]` returns `{py} (256,0,256)`. We can also change the value associated with a given key or introduce a new key-value pair using indexing and assignment: 

    pre(python-executable)
      | rgb = {
      |   "fuchsia": (256, 0, 256),
      |   "firebrick": (178, 34, 34),
      |   "goldenrod": (218, 165, 32)
      | }
      | rgb["crimson"] = (220, 20, 60)
      | len(rgb)

The `{py} dict` [methods](gloss:method), `{py} keys` and `{py} values`, may be used to access the keys and values of a dictionary. 

    pre(python-executable)
      | rgb = {
      |   "fuchsia": (256, 0, 256),
      |   "firebrick": (178, 34, 34),
      |   "goldenrod": (218, 165, 32)
      | }
      | rgb.keys()

[Weiter](btn:next)

---
> id: step-129

::: .exercise
**Exercise**  
Consider a dictionary which encodes flight arrival times: 

``` python
import datetime
arrival_times = {
  "JetBlue 924": datetime.time(7,9),
  "United 1282": datetime.time(7,42),
  "Southwest 196": datetime.time(7,3)
}
```

You can most easily use this dictionary to [[look up the arrival time of a flight|look up which flights arrive at a given time]]. 

Suppose you want to reverse the lookup direction: for any given time, you want to see which flight arrives at that time. One problem is that [[multiple flights may arrive at the same time|the airlines aren't the same]]. 

Assuming that the codomain values are distinct, however, you can form a new dictionary that allows you to look up keys for values by mapping the `{py} reversed` function over the key-value pairs of the dictionary (obtainable through `{py} items` method). 

Implement this idea in the block below. Check that your dictionary works by indexing it with `{py} datetime.time(7,9)`. 

:::

    pre(python-executable)
      | import datetime
      | arrival_times = {
      |   "JetBlue 924": datetime.time(7,9),
      |   "United 1282": datetime.time(7,42),
      |   "Southwest 196": datetime.time(7,3)
      | }

    x-quill

_{button.next-step} Absenden_

---
> id: step-130

*Lösung*. We use the `{py} dict` function to convert the list of pairs back into a dictionary: `{py} dict(map(reversed, arrival_times.items()))`. 

[Weiter](btn:next)

---
> id: step-131

### Übungen 

::: .exercise
**Exercise**  
Python supports a `{py} dict` comprehension construct which is very similar to a list comprehension. Here's a dictionary that maps each one-digit positive integer to its square: 

``` python
square_dict = {k: k*k for k in range(1, 10)}
```

Use a dict comprehension to make a dictionary which maps each of the first 100 powers of 2 to its units digit.
:::

    pre(python-executable)
      | 

    x-quill

---
> id: step-132

*Lösung*. We convert to a string, get the last character, and convert back to an integer: 

    pre(python-executable)
      |   {2**k: int(str(2**k)[-1]) for k in range(100)}

[Weiter](btn:next)

---
> id: step-133

::: .exercise
**Exercise**  
Suppose you want to store student IDs in a part of a web application where the main thing you need to do is check whether an ID input by a student is a valid student ID (so you can flag it if it has been mistyped). Among the given options, the best data structure for this purpose would be a [[set|list|tuple|dictionary]]. 
:::

[Weiter](btn:next)

---
> id: step-134

*Lösung*. This is an ideal use case for sets. Lists and tuples will be slower for checking membership, and dictionaries aren't quite appropriate because it isn't clear what the values would be.

---

## Wiederholung (Schleifen)

> id: iteration
> section: iteration

We have already seen one way of doing something to each element in a collection: the [*list comprehension*](gloss:listcomp).

    pre(python-executable)
      | smallest_factor = {2: 2, 3: 3, 4: 2, 5: 5, 
      |                  6: 2, 7: 7, 8: 2, 9: 3}
      | [v for (k,v) in smallest_factor.items()]

In this list comprehension, we **iterate** over the pairs of the [dictionary](gloss:dictionary) to produce a new list. Although list comprehensions are very useful, they are not flexible enough to cover all our iteration needs. A much more flexible tool is the **for loop**.

[Weiter](btn:next)

---
> id: step-135

### *For* statements

The code above could also be rewritten as follows:

    pre(python-executable)
      | smallest_factor = {2: 2, 3: 3, 4: 2, 5: 5, 
      |                  6: 2, 7: 7, 8: 2, 9: 3}
      | vals = []
      | for (k,v) in smallest_factor.items():
      |     vals.append(v)
      | vals

The statement `{py} for item in collection:` works as follows: the first element of `{py} collection` is assigned to `{py} item`, and the block indented below the `{py} for` statement is executed. Then, the second element of `{py} collection` is assigned to `{py} item`, the indented block is executed again, etc., until the end of the collection is reached. 

[Weiter](btn:next)

---
> id: step-136

We can nest `{py} for` statements. For example, suppose we have a matrix represented as a [list](gloss:list) of lists, and we want to sum all of the matrix entries. We can do that by iterating over the rows and then iterating over each row: 

    pre(python-executable)
      | 
      | def sum_matrix_entries(M):
      |     """
      |     Return the sum of the entries of M
      |     """
      |     s = 0
      |     for row in M:
      |         for entry in row:
      |             s = s + entry
      |     return s
      |
      | def test_sum():
      |     M = [[1,2,3],[4,5,6],[7,8,9]]
      |     assert sum_matrix_entries(M) == 45
      |     return "Test passed!"
      |
      | test_sum()

[Weiter](btn:next)

---
> id: step-137

::: .exercise
**Exercise**  
Suppose you have imported a function `{py} file_bug_report` with two parameters: `{py} id` and `{py} description`. Suppose also that you have a `{py} dict` called `{py} bugs` whose keys are ids and whose values are strings representing descriptions. Write a loop which performs the action of filing each bug report in the dictionary.  
:::

    pre(python-executable)
      | def file_bug_report(id, description):
      |     "A dummy function which represents filing a bug report"
      |     print(f"bug {id} ({description}) successfully filed")
      | 
      | 
      | bugs = {"07cc242a": 
      |           "`trackShipment` hangs if `trackingNumber` is missing", 
      |         "100b359a": 
      |           "customers not receiving text alerts"}

    x-quill

---
> id: step-137a

*Lösung*. We loop over the items: 

    pre(python-executable)
      | for id, desc in bugs.items():
      |     file_bug_report(id, desc)

[Weiter](btn:next)

---
> id: step-138

::: .exercise
**Exercise**  
Write a [function](gloss:function) called `{py} factorial` which takes a positive integer `{py} n` as an argument and returns its factorial. 
:::

    pre(python-executable)
      | def factorial(n):
      |     "Return n!"
      |     # add code here
      |
      | def test_factorial():
      |     assert factorial(3) == 6
      |     assert factorial(0) == 1
      |     assert factorial(20) == 2432902008176640000
      |     return "Tests passed!"
      |
      | test_factorial()

    x-quill

---
> id: step-139

*Lösung*. We loop through `{py} range(1, n+1)` and multiply as we go. 

    pre(python-executable)
      | def factorial(n):
      |     "Return n!"
      |     product = 1
      |     for k in range(1, n+1):
      |         product = k * product 
      |     return product
      | 
      | 
      | def test_factorial():
      |     assert factorial(3) == 6
      |     assert factorial(0) == 1
      |     assert factorial(20) == 2432902008176640000
      |     return "Tests passed!"
      |
      | test_factorial()

[Weiter](btn:next)

---
> id: step-140

### *While* statements

The **Collatz conjecture** is one of the easiest-to-state unsolved problems in mathematics. Starting from any given positive integer, we halve it if it's even and triple it and add one if it's odd. The Collatz conjecture states that repeatedly applying this rule always gets us to the number 1 eventually. For example, the *Collatz sequence* starting from 17 is

    center: p 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

If we want to write a Python function which returns the Collatz sequence for any given starting number, we face a problem: we don't know from the start how many steps it will take to reach 1, so it isn't clear how we could use a *for loop*. What we want to do is execute a block of code until a given condition is met. Python provides the `{py} while` loop for this purpose.

    pre(python-executable)
      | def collatz_sequence(n):
      |     "Return the Collatz sequence starting from n"
      |     sequence = [n]
      |     while n > 1:
      |         if n % 2 == 0:
      |             n = n // 2
      |         else:
      |             n = 3*n + 1
      |         sequence.append(n)
      |     return sequence
      |
      | def test_collatz():
      |     assert collatz_sequence(17) == [17, 52, 26, 13, 
      |                                 40, 20, 10, 5, 
      |                                 16, 8, 4, 2, 1]
      |     return "Test passed!"
      |
      | test_collatz()

The expression which appears immediately following the `{py} while` keyword is called the **condition**, and the block indented below the `{py} while` statement is the **body** of the loop. The rules of the language stipulate the following execution sequence for a `{py} while` statement: the condition is evaluated, and if it's true, then the body is executed, then condition is evaluated again, and so on. When the condition returns `{py} False`, the loop is exited. An exit can also be forced from within the body of the while loop with the keyword `{py} break`. 

::: .exercise
**Exercise**  
Newton's algorithm for finding the square root of a number `{py} n` starts from 1 and repeatedly applies the function $x\mapsto \frac{1}{2}(x + n/x)$. For example, applying this algorithm to approximate $\sqrt{2}$, we get 

    center: p 1, 3/2, 17/12, 577/408, ...
    
This algorithm converges very fast: 577/408 approximates $\sqrt{2}$ with a relative error of about 0.00015%. 

Write a function `{py} newtonsqrt` which takes as an argument the value `{py} n` to square root and applies Newton's algorithm until the relative difference between consecutive iterates drops below $10^{-8}$. 

Note that $10^{-8}$ can be represented in Python using scientific notation `{py} 1e-8`. 
:::

    pre(python-executable)
      | def newtonsqrt(n):
      |     """Use Newton's algorithm to approximate √n"""
      |     # add code here
      |
      | def test_newton():
      |     assert abs(newtonsqrt(2) - 1.4142135623730951) < 1e-6
      |     assert abs(newtonsqrt(9) - 3) < 1e-6
      |     return "Tests passed!"
      |
      | test_newton()

    x-quill

---
> id: step-141

*Lösung*. We keep up with two separate variables, which we call `{py} x` and *`{py} old_x`*, to compare the most recent two iterates: 

    pre(python-executable)
      | def newtonsqrt(n):
      |     """Use Newton's algorithm to approximate √n"""
      |     x = 1
      |     while True:
      |         old_x = x
      |         x = 1/2 * (x + n/x)
      |         if abs(x - old_x)/old_x < 1e-8:
      |             return x

[Weiter](btn:next)

---
> id: step-142

### Übungen 

::: .exercise
**Exercise**  
Write a function which prints an $n \times n$ checkerboard pattern of `{py} x`'s and `{py} o`'s. 

_Note_: `{py} \\n` in a string literal represents the "newline" character. You'll need to print this character after each row you've printed.
:::

    pre(python-executable)
      | def checkerboard(n):
      |     """
      |     Prints an n × n checkerboard, like:
      |       
      |     xoxo
      |     oxox
      |     xoxo
      |     oxox
      |     """

    x-quill

---
> id: step-143

*Lösung*. We loop through the rows and use an `{py} if` statement to print a different output depending on whether the row is even-numbered or odd-numbered.

    pre(python-executable)
      | def checkerboard(n):
      |     "Prints an n × n checkerboard"
      |     for i in range(n):
      |         if i % 2 == 0:
      |             print("xo" * (n//2))
      |         else:
      |             print("ox" * (n//2))
      |         print("\n")

::: .exercise
**Exercise**  
Write a function which prints [Pascal's triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle) up to the $n$th row, where the top row counts as row zero. You might want to use a helper function `{py} print_row(n,row)` to manage the responsibility of printing each row, as well as a helper function `{py} next_row(row)` to calculate each row from the previous one. 

Example output, for `{py} n = 4`: 

``` code
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
```

_Note_: there's no solution to this one, but you can do it on your own!
:::

    pre(python-executable)
      | def print_row(n,row):
      |     """
      |     Prints the nth row (`row`) of Pascal's triangle
      |     with appropriate spacing.
      |     """
      |
      | def next_row(row):
      |     """
      |     Returns the next row in Pascal's triangle.
      |     Example: next_row([1,3,3,1]) == [1,4,6,4,1]
      |     """
      |
      | def pascals_triangle(n):
      |     """
      |     Print the first n rows of Pascal's triangle
      |     """

    x-quill

---

## Projekt 1: Spotify

> id: project-1
> section: project-1-spotify

One of the most challenging aspects of learning to program is the difficulty of synthesizing individual skills in the service of a larger project. This section provides a stepping stone on that path by progressively solving a real-world problem. 

You'll want to follow along either on your own computer or in [Binder](https://mybinder.org/v2/gh/data-gymnasia/python-binder/master). You can't use code blocks in this page, because there's an authentication step which requires a feature which isn't supported here.

[Weiter](btn:next)

---
> id: step-144

### Spotify

As an avid Spotify listener, you find that you'd prefer more flexibility in the way your playlists are built. For example, you find it tedious when two particularly long songs play back-to-back, and you want to eliminate those instances without having to read through and do it manually. Also, you want to have at least three separate genres represented in every block of eight consecutive songs. You want the flexibility to modify these requirements or add new ones at any time. 

This is not the sort of capability that Spotify is ever going to provide through its app, but Spotify *does* support interaction through a programming language. Such an interface is called an **API** (application programming interface). 

[Weiter](btn:next)

---
> id: step-145

You decide to google *Spotify API* to see what the deal is. That takes you to the [main Spotify API page](https://developer.spotify.com/documentation/web-api/), where you read about how the API uses standard HTTPS requests (these are the requests that your browser is using in the background load webpages, enter information into forms on the internet, etc.). Rather than proceeding along this route, you think to yourself "surely someone in the vast Python world has made a Python package to handle these HTTPS requests". So you google "Spotify Python API". 

[Weiter](btn:next)

---
> id: step-146

Turns out, you were right. The first few hits pertain to a package called `{py} spotipy`. You check out [the docs](https://spotipy.readthedocs.io/en/latest/) and find that you can install the package by running _pip install spotipy_. Since _{code}pip_ is a [command line](gloss:command-line) tool, this is something you should run from the terminal.

_Note_: if you're working in a Jupyter notebook, you can send code from a cell to the command line by prepending an exclamation point:

``` python
!pip install spotipy
```

[Weiter](btn:next)

---
> id: step-147

Looking around in the documentation a bit more, we discover the functions *`{py} user_playlist_tracks`* and *`{py} user_playlist_add_tracks`*, which retrieve the tracks on a playlist and add new ones to it, respectively. So you decide to get the tracks from one of your playlists, manipulate them however you want inside the Python program, and put the new list in place of the old one. All we need from Spotify to make this work, in addition to the previous two functions, is a function to [[remove the existing tracks|swap tracks one at a time|get a list of the playlist tracks]]. 

---
> id: step-148

Looking around a bit more, you find *`{py} user_playlist_remove_all_occurrences_of_tracks`*, which isn't exactly what you were looking for, but it will work since we can [[remove every track originally on the playlist|instruct it to remove every track on Spotify]]. 

---
> id: step-149

Your plan is beginning to take shape. You decide to make sure everything works before getting into the details of how you're going to modify the playlist. You follow the instructions in the documentation for getting the appropriate authorization credentials for your Python program to access your Spotify account. That step is a bit tedious, but it's going to be worth it. Working from the example in the documentation, you eventually arrive at some code that looks like the following (note that the values of the `{py} CLIENT` variables and the *`{py} playlist_id`* below are fake, so yours will necessarily be different). 

``` python
import spotipy
import spotipy.util as util

username = 'sswatson'
scope = 'user-library-read'
scope = 'playlist-modify-public'

CLIENT_ID = 'bcc57908a2e54cee94f9e2307db67c2e'
CLIENT_SECRET = '6831b3ceaf0a40a6a1fdeb67105ef19b'

playlist_id = '57hQnYeBC4u0IUhaaHmM0k'
  
token = util.prompt_for_user_token(username, 
                                   scope,
                                   client_id=CLIENT_ID,
                                   client_secret=CLIENT_SECRET,
                                   redirect_uri='http://localhost/')

sp = spotipy.Spotify(auth=token)
```

[Weiter](btn:next)

---
> id: step-150

Next, you implement your plan sans-track-modification, to make sure the functions work as expected. 

``` python
original_tracks = sp.user_playlist_tracks(username, playlist_id)
# shorten the name of the remove tracks function
remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
remove_tracks(username, playlist_id, original_tracks)
sp.user_playlist_add_tracks(username, playlist_id, original_tracks)
```

That second line is there because you decided that function's name was so long it was getting unwieldy. 

[Weiter](btn:next)

---
> id: step-151

Hmm. Fehler. Specifically, a `{py} SpotifyException`, which suggests that you didn't use the API in the intended way. You'll have to dig into this to figure out what went wrong. But first, it's a bit untidy to have those four lines of code loose in our program. Let's wrap them in a function. The playlist id should be an argument, and we should also take as an argument a track-modifying function that we'll start using once we get to that part. 

``` python
def modify_playlist_tracks(playlist_id, track_modifier):
    original_tracks = sp.user_playlist_tracks(username, playlist_id)
    new_tracks = track_modifier(original_tracks)
    remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
    remove_tracks(username, playlist_id, original_tracks)
    sp.user_playlist_add_tracks(username, playlist_id, new_tracks)
```

Now let's figure out the error. If we examine the traceback supplied as a part of the error message, we can see that the error is being thrown from the line where we call *`{py} remove_tracks`*. So we look at the documentation for that function. 

``` python
help(remove_tracks)
```

We see that the `{py} tracks` argument is supposed to be a list of playlist ids. Is that what *`{py} user_playlist_tracks`* returns? You investigate. 

``` python
original_tracks = sp.user_playlist_tracks(username, playlist_id)
original_tracks
```

The output from that expression prints all over the screen, and it looks like it has a lot more data than just a list of id's. That's actually pretty helpful, because we'll need that data to modify the list appropriately. But in the meantime, we need to extract the actual playlist ids. 

[Weiter](btn:next)

---
> id: step-152

You begin by checking *`{py} type(original_tracks)`*. It's a [[dict|list|tuple]]. So you have a look at its keys: 

``` python
original_tracks.keys()
```

---
> id: step-153

This returns

``` python
dict_keys(['href', 'items', 'limit', 'next', 'offset', 'previous', 'total'])
```

Without looking to carefully at the other items, it's a good guess that `{py} 'items'` is the one you want. You check 
*`{py} type(original_tracks['items'])`* and find that it's a [[list|dict|tuple]]. To have a look at the first one, you do *`{py} original_tracks['items'][0]`*. Repeating this step-by-step inspection, you find finally that *`{py} original_tracks['items'][0]['track']['id']`* is an actual playlist id. 

---
> id: step-154

::: .exercise
**Exercise**  
Write a [list comprehension](gloss:listcomp) to calculate the list of all of the tracks' playlist ids. 
:::

    pre(python-executable)
      | 

    x-quill

---
> id: step-155

*Lösung*. *`{py} [item for item in original_tracks['items']]`* would return the `{py} 'items'` list. To map each item to its playlist id, we index it with `{py} 'track'` and then with `{py} 'id'` as above. So we get *`{py} [item['track']['id'] for item in original_tracks['items']]`* 

[Weiter](btn:next)

---
> id: step-156

You insert this list comprehension into our function to fix it. You decide to reverse the list of tracks just to confirm that running the code has an effect on the Spotify side. 

``` python
def modify_playlist_tracks(playlist_id, track_modifier):
    original_tracks = sp.user_playlist_tracks(username, playlist_id)
    new_tracks = track_modifier(original_tracks)
    remove_tracks = sp.user_playlist_remove_all_occurrences_of_tracks
    original_ids = [item['track']['id'] for item in
                                        original_tracks['items']]
    remove_tracks(username, playlist_id, original_ids)
    sp.user_playlist_add_tracks(username, playlist_id, new_tracks)


def track_modifier(tracks):
    return reversed([item['track']['id'] for item in tracks['items']])


modify_playlist_tracks(playlist_id, track_modifier)
```

Das funktioniert! You can check that the order of the playlist was reversed. 

::: .exercise
**Exercise**  
Add more features to the function *`{py} track_modifier`* to modify playlists in ways that you find interesting or desirable. In the answer box below, describe what you did and add code snippets as you see fit.
:::

    x-quill

---

## Projekt 2: Seriendruck

> id: project-2
> section: project-2-mail-merge

Suppose you want to send an email to dozens of people, with some elements of the message varying by recipient. For example, you'd like to insert the recipient's first name in the salutation, and you might also need to insert a personal URL or passcode, information on the recipient's status, etc.

This problem is called *mail merge*, and there are many commercial software solutions available. However, in this section you'll implement a simple and flexible mail merge in Python. You will want to do this on your computer, because the authorization step involves using your operating system keychain. 

[Weiter](btn:next)

---
> id: step-157

### yagmail

The first hurdle is to securely authorize your Python program to access your email account. You're a Gmail user, so you search for a Gmail package for Python and find [yagmail](https://github.com/kootenpv/yagmail). 

Following the installation instructions on the project GitHub page, you run `{py} pip3 install yagmail[all]` from the [command line](gloss:command-line) to install `{py} yagmail`. 

[Weiter](btn:next)

---
> id: step-158

Continuing to follow the instructions, you run

``` python
import yagmail
yagmail.register('mygmailusername')
```

and enter the password for the Gmail account in the resulting password prompt. This stores the password in the operating system keychain so you don't have to keep entering it. (Note: if you're using dual authentication on your Google account, you'll need to generate and enter a special app password instead of your regular password; see [this info page](https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor) for instructions.)

[Weiter](btn:next)

---
> id: step-159

Now you can set up an `{py} SMTP` object for sending messages. 

``` python
yag = yagmail.SMTP("mygmailusername@gmail.com")
```

In the documentation, you read that this object has a `{py} send` method whose parameter list includes `{py} to`, `{py} subject`, and `{py} contents`. you want to call this method once for each recipient, and for that you use a [[for loop|while loop|if statement]]. 

---
> id: step-160

### CSV

Before sending the message, you have to figure out to store the data for each recipient and how to insert that data into the message. One easy solution to the former problem is to store the data in a spreadsheet. You decide to skip the spreadsheet software since the situation is so simple. Instead, you make a file called `{code} mail-merge-data.csv`, open it in a text editor, and insert the contents

    pre
      | Name,Email,Status
      | Viorica,virica@example.com,pending
      | Sidra,sidra_tiwana@example.com,completed
      | Alfonso,alfonso.serrano@example.com,pending

You save the file and proceed to figuring out how to load it into Python. 

[Weiter](btn:next)

---
> id: step-161

### Panda

You google "enter CSV in Python" and scan the first several search results. The first couple show examples with a dozen or so lines of code, which seems more complicated than necessary. Going back to the search results, you see a function called *`{py} pandas.read_csv`*, and you remember that Pandas is the recommended package for handling spreadsheet data in Python. So you do 

``` python
import pandas as pd
mailData = pd.read_csv("mail-merge-data.csv")
```

You check `{py} type(mailData)` and see that `{py} mailData` is a `{py} DataFrame`, which is the general Pandas type for tabular data. 
      
[Weiter](btn:next)

---
> id: step-162

Now you have to figure out how to loop over the rows of a `{py} DataFrame`. You search the web for "how to loop over rows of pandas dataframe" and discover the method [[**itertuples** | **iteritems** | **items**]] (look it up!). 

---
> id: step-163

You do `{py} list(mailData.itertuples())[0]` to get an example row from the `{py} DataFrame`, and you call `{py} dir` on it to look for the right method for extracting each column value. You see that `{py} Name`, `{py} Email`, and `{py} Status` are attributes of the row, so you can access them using dot syntax (like `{py} row.Email`). 

[Weiter](btn:next)

---
> id: step-164

Finally, you need to insert information from each `{py} DataFrame` row into the message. Fortunately, you alreday know a great way to do this: [[f-strings|dictionaries|lists]]! 

---
> id: step-165

It will be a bit awkward to type the whole message into the line where you call `{py} yag.send`, so instead you write a function that takes `{py} row` as a parameter and returns the message. 

``` python
def message(row):
    return f"""
    Dear {row.Name},
    
    Thanks for participating! Your status is {row.Status}. 
    
    Yours,
    Roza
    """
```

::: .exercise
**Exercise**  
Tie all of the above together to write a couple more lines of code that will actually send the messages. 
:::

    pre(python-executable)
      | 

    x-quill

---
> id: step-166

*Lösung*. We supply the `{py} Email` attribute of `{py} row` to the `{py} to` argument, and  `{py} message(row)` to `{py} contents`:

``` python
for row in mailData.itertuples():
    yag.send(to=row.Email, 
             subject="Your status",
             contents = message(row))
```

[Weiter](btn:next)

---
> id: step-167

