<!-------------------------------------------------------- CHEAT SHEET -------------------------------------------------------->


   **Cheatsheet** "essentials"

|👉|💡| C-CODE |  | <sup>**click this icon:</sup> [⤵](https://github.com/IxI-Enki/IxI-Enki/blob/main/.dev/documents/%5BC%5D%20Cheat%20Sheet.md)** ***to expand lists*** |💡|👈|  
| :-: | :-: | :-: |:-: | :-------------:  |:-:|:-: |   


---

<details><summary> <code>#include</code> ⤵ <sup>Libraries with Examples</sup></summary>
   <!----------------------------------------------------------------------------------->
   <details><summary> <code>&lt;stdio.h&gt;</code> ⤵ <sup><mark>Input/Output Funktionen</mark> zur Verfügung</sup> </summary>
     
   ### **Input/Output:**  
   - `printf`: Formatierte Ausgabe auf die Konsole  
   - `scanf`: Formatierte Eingabe von der Konsole  
   - `getchar`: Ein Zeichen von der Konsole einlesen  
   - `putchar`: Ein Zeichen auf die Konsole ausgeben  
   - `puts`: Eine Zeichenkette gefolgt von einem Zeilenumbruch ausgeben  
   - ❗ `gets` <sub>(**veraltet und unsicher**)</sub> <s> Eine Zeichenkette von der Konsole einlesen</s>  
   - `fgets`: Eine Zeichenkette von der Konsole einlesen (**sicherer als gets**)  
   ### **Dateioperationen:**   
   - `fopen`: Eine Datei öffnen  
   - `fclose`: Eine Datei schließen  
   - `fprintf`: Formatierte Ausgabe in eine Datei  
   - `fscanf`: Formatierte Eingabe von einer Datei  
   - `fgetc`: Ein Zeichen aus einer Datei lesen  
   - `fputc`: Ein Zeichen in eine Datei schreiben  
   - `fgets`: Eine Zeichenkette aus einer Datei lesen  
   - `fputs`: Eine Zeichenkette in eine Datei schreiben  
   ### **Datei-Positionierung:**  
   - `fseek`: Die Position in einer Datei setzen  
   - `ftell`: Die aktuelle Position in einer Datei abrufen  
   - `rewind`: Die Position in eine Datei auf den Anfang setzen  
   ### **Eingabe/Ausgabe mit Zeichenketten:**  
   - `sprintf`: Formatierte Ausgabe in eine Zeichenkette  
   - `sscanf`: Formatierte Eingabe von einer Zeichenkette  
   ### **Fehlerbehandlung:**  
   - `perror`: Eine Fehlermeldung ausgeben, basierend auf der zuletzt aufgetretenen Fehlermeldung  
   - `feof`: Überprüfen, ob das Ende einer Datei erreicht wurde  
   - `ferror`: Überprüfen, ob ein Fehler beim Lesen/Schreiben aufgetreten ist  
   ### **Flushing:**  
   - `fflush`: Buffer für eine Datei leeren  
   ### **Standard-Datei-Zeiger:**  
   - `stdin`: Standard-Eingabe (*Tastatur*)  
   - `stdout`: Standard-Ausgabe (*Bildschirm*)  
   - `stderr`: Standard-Fehlerausgabe (*Bildschirm*)  

   ❗*Dies ist ***keine*** vollständige Liste*  

   </details>
   
   <sub><sup>
   ---
   </sup></sub>
   <!----------------------------------------------------------------------------------->
   <details><summary> <code>&lt;string.h&gt;</code> ⤵ <sup> zur string-Bearbeitung:</sup> </summary>

   ### **Zeichenkettenmanipulation:**  
   - `strcpy`: Kopiert eine Zeichenkette  
   - `strncpy`: Kopiert eine bestimmte Anzahl von Zeichen einer Zeichenkette  
   - `strcat`: Hängt eine Zeichenkette an eine andere an  
   - `strncat`: Hängt eine bestimmte Anzahl von Zeichen einer Zeichenkette an eine andere an  
   - `strcmp`: Vergleicht zwei Zeichenketten  
   - `strncmp`: Vergleicht eine bestimmte Anzahl von Zeichen zweier Zeichenketten  
   - `strlen`: Gibt die Länge einer Zeichenkette zurück  
   ### **Zeichenkettenmanipulation (***ohne Nullzeichen***):**  
   - `strchr`: Sucht das erste Auftreten eines Zeichens in einer Zeichenkette  
   - `strrchr`: Sucht das letzte Auftreten eines Zeichens in einer Zeichenkette  
   - `strstr`: Sucht das erste Vorkommen einer Teilzeichenkette in einer Zeichenkette  
   - `strpbrk`: Sucht das erste Auftreten eines Zeichens aus einer Zeichenkette von Zeichen  
   - `strspn`: Gibt die Länge des Anfangs einer Zeichenkette zurück, die nur aus bestimmten Zeichen besteht  
   - `strcspn`: Gibt die Länge des Anfangs einer Zeichenkette zurück, die keine bestimmten Zeichen enthält  
   ### **Speichermanipulation:**  
   - `memcpy`: Kopiert einen Speicherbereich  
   - `memmove`: Kopiert einen Speicherbereich, auch wenn sich die Quelle und das Ziel überschneiden  
   - `memcmp`: Vergleicht zwei Speicherbereiche  
   - `memset`: Setzt einen Speicherbereich auf einen bestimmten Wert  
   ### **Zeichenkettenbearbeitung:**  
   - `strtok`: Teilt eine Zeichenkette in Token auf  
   ### **Zeilenumbrüche und Leerzeichen:**  
   - `isspace`: Überprüft, ob ein Zeichen ein Leerzeichen ist  
   - `isdigit`: Überprüft, ob ein Zeichen eine Ziffer ist  
   - `isalpha`: Überprüft, ob ein Zeichen ein Buchstabe ist  
   - `isalnum`: Überprüft, ob ein Zeichen eine Ziffer oder ein Buchstabe ist  
   ### **Konvertierung:**  
   - `atoi`: Konvertiert eine Zeichenkette in eine ganze Zahl  
   - `atol`: Konvertiert eine Zeichenkette in eine lange ganze Zahl  
   - `atof`: Konvertiert eine Zeichenkette in eine Gleitkommazahl  

   ❗*Verwende wenn möglich ***Safe-Strings-Bibliotheken*** ( `strncpy_s`, `strcpy_s`, `sprintf_s` **ETC**..) für sicherere Operationen*
   
   </details>
   
   <sub><sup>
   ---
   </sup></sub>
   <!----------------------------------------------------------------------------------->
   <details><summary> <code>&lt;stdlib.h&gt;</code> ⤵ <sup> allgemeine Operationen - Speicherverwaltung & systembezogenen Funktionen:</sup> </summary>

   ### **Speicherallokation und -freigabe:**  
   - `malloc`: Allokiert dynamischen Speicher  
   - `calloc`: Allokiert dynamischen Speicher und initialisiert alle Bytes auf 0  
   - `realloc`: Ändert die Größe eines zuvor mit `malloc` oder `calloc` allokierten Speicherblocks  
   - `free`: Gibt den durch `malloc`, `calloc` oder `realloc` allokierten Speicher frei  
   ### **Zufallszahlen:**  
   - `rand`: Generiert eine Pseudozufallszahl  
   - `srand`: Setzt den Startwert für den Zufallszahlengenerator  
   ### **Konvertierung von Zeichenketten zu Zahlen:**  
   - `atoi`: Konvertiert eine Zeichenkette in eine ganze Zahl (**integer**)  
   - `atol`: Konvertiert eine Zeichenkette in eine lange ganze Zahl (**long**)  
   - `atof`: Konvertiert eine Zeichenkette in eine Gleitkommazahl (**float**)  
   ### **Pseudozufallszahlengeneratoren:**  
   - `rand`: Generiert eine Pseudozufallszahl  
   - `srand`: Setzt den Startwert für den Zufallszahlengenerator  
   ### **Umgebungsvariablen:**  
   - `getenv`: Ruft den Wert einer Umgebungsvariable ab  
   ### **Prozesssteuerung:**  
   - `system`: Führt ein Systemkommando aus   
   ### **Exit-Funktion:**  
   - `exit`: Beendet das Programm  
   ### **Dynamische Speicherreservierung:**  
   - `abort`: Beendet das Programm unmittelbar mit einem Aufruf von `SIGABRT`  
   - `atexit`: Registriert Funktionen, die bei Programmbeendigung aufgerufen werden sollen  
   - `exit`: Beendet das Programm  
   - `getenv`: Ruft den Wert einer Umgebungsvariable ab  
   - `system`: Führt ein Systemkommando aus  

   ❗*Unsachgemäße Verwendung **kann zu Speicherlecks** oder anderen **schwerwiegenden Problemen** führen*  
   
   </details>
   
   <sub><sup>
   ---
   </sup></sub>
   <!----------------------------------------------------------------------------------->
   <details><summary> <code>&lt;math.h&gt;</code> ⤵ <sup> mathematischen Funktionen:</sup> </summary>

   ### Trigonometrische Funktionen:  
   - `sin(x)`: Sinus von `x`  
   - `cos(x)`: Cosinus von `x`  
   - `tan(x)`: Tangens von `x`  
   - `asin(x)`: Arkussinus von `x`  
   - `acos(x)`: Arkuscosinus von `x`  
   - `atan(x)`: Arkustangens von `x`  
   ### Hyperbolische Funktionen:  
   - `sinh(x)`: Hyperbelsinus von `x`  
   - `cosh(x)`: Hyperbelcosinus von `x`  
   - `tanh(x)`: Hyperbeltangens von `x`  
   ### Exponential & Logarithmusfunktionen:  
   - `exp(x)`: e<sup>`x`</sup>  
   - `log(x)`: ln(`x`)  
   - `log10(x)`: log<sub>10</sub>(`x`)  
   ### Potenzfunktionen:  
   - `pow(x, y)`: `x`<sup>`y`</sup>  
   - `sqrt(x)`: √(`x`)  
   ### Runden & Betrag:  
   - `ceil(x)`: Rundet `x` auf die nächstgrößere Ganzzahl  
   - `floor(x)`: Rundet `x` auf die nächstkleinere Ganzzahl  
   - `fabs(x)`: Gibt den absoluten Wert von `x` zurück  
   ### Weitere Funktionen:  
   - `fmod(x, y)`: Berechnet den Rest der Division von `x` durch `y`  
   - `hypot(x, y)`: Berechnet die Hypotenuse eines rechtwinkligen Dreiecks mit den Seitenlängen `x` und `y`  
   - `round(x)`: Rundet `x` auf die nächste Ganzzahl  

   ❗*trigonometrische Funktionen verwenden Radianten*  
     **🧮 umwandeln mit: `deg2rad` & `rad2deg`**  
   
   </details>
   
   <sub><sup>
   ---
   </sup></sub>
   <!----------------------------------------------------------------------------------->
   <details><summary> <code>&lt;ctype.h&gt;</code> ⤵ <sup> Charakter handling:</sup> </summary>



<!--close--->   
   </details>
</details>
<!--end-->




  ---

<details>
  <summary> <code><var>variables</var></code> ⤵ <sup>with Examples</sup> </summary>
    
- Ganzzahlige Typen  
    - `int integerVariable = 42;`  
      >  4-Byte-Ganzzahl (-2,147,483,648 bis 2,147,483,647)  
    - `short shortVariable = 10;`  
      >  2-Byte-Ganzzahl (-32,768 bis 32,767)  
    - `long longVariable = 1234567890;`  
      >  Mindestens 4-Byte-Ganzzahl (-2,147,483,648 bis 2,147,483,647)  
    - `long long longLongVariable = 1234567890123456789LL;`  
      >  Mindestens 8-Byte-Ganzzahl (-9,223,372,036,854,775,808 bis 9,223,372,036,854,775,807)  

- Gleitkommazahlen  
    - `float floatVariable = 3.14f;`  
      >  4-Byte-Gleitkommazahl (1.2E-38 bis 3.4E+38 mit sechs Dezimalstellen Genauigkeit)  
    - `double doubleVariable = 3.14159265359;`  
      >  8-Byte-Gleitkommazahl (2.3E-308 bis 1.7E+308 mit 15 Dezimalstellen Genauigkeit)  

- Zeichen  
    - `char charVariable = 'A';`  
      > Einzelnes Zeichen (im Allgemeinen -128 bis 127 oder 0 bis 255, je nach Vorzeichen)  

- Vorzeichenlose Ganzzahlen  
    - `unsigned int unsignedIntVariable = 100;`  
      >  Vorzeichenlose 4-Byte-Ganzzahl (0 bis 4,294,967,295)  
    - `unsigned short unsignedShortVariable = 200;`  
      >  Vorzeichenlose 2-Byte-Ganzzahl (0 bis 65,535)  
    - `unsigned long unsignedLongVariable = 300;`  
      >  Mindestens 4-Byte vorzeichenlose Ganzzahl (0 bis 4,294,967,295)  
    - `unsigned long long unsignedLongLongVariable = 400;`   
      >  Mindestens 8-Byte vorzeichenlose Ganzzahl (0 bis 18,446,744,073,709,551,615)  

- Boolescher Typ  
    - `_Bool boolVariable = 1;`   
      >  Wahr (true) oder falsch (false)  

- Void-Typ (wird oft für Funktionen ohne Rückgabewert verwendet)  
    - `void voidPointer;`  
  
</details>


<!--  

<sub><sup>
---
</sup></sub>

