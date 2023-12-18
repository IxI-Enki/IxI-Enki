<!-------------------------------------------------------- CHEAT SHEET -------------------------------------------------------->
### C code:

|👉|💡| **Cheatsheet** *<sup>"essentials"</sub>* | <sup>**click this icon:</sup> [⤵](https://github.com/IxI-Enki/IxI-Enki/blob/main/.dev/documents/%5BC%5D%20Cheat%20Sheet.md)** ***to expand lists*** |💡|👈|  
| :-: | :-: | :-: | :-------------:  |:-:|:-: |   

---

<details>
  <summary> #include ⤵ <sup>Libraries with Examples</sup></summary>
   <!----------------------------------------------------------------------------------->
   <details><summary> stdio.h ⤵ <sup>Bibliothek stellt Funktionen für Ein- und Ausgabe (Input/Output) zur Verfügung</sup> </summary>
     
   ### **Input/Output:**
   - printf: Formatierte Ausgabe auf die Konsole  
   - scanf: Formatierte Eingabe von der Konsole  
   - getchar: Ein Zeichen von der Konsole einlesen  
   - putchar: Ein Zeichen auf die Konsole ausgeben  
   - puts: Eine Zeichenkette gefolgt von einem Zeilenumbruch ausgeben  
   - gets (veraltet und unsicher): Eine Zeichenkette von der Konsole einlesen  
   - fgets: Eine Zeichenkette von der Konsole einlesen (sicherer als gets)

   <sub><sup>
   ---
   </sup></sub>
   ### **Dateioperationen:**   
   - fopen: Eine Datei öffnen  
   - fclose: Eine Datei schließen  
   - fprintf: Formatierte Ausgabe in eine Datei  
   - fscanf: Formatierte Eingabe von einer Datei  
   - fgetc: Ein Zeichen aus einer Datei lesen  
   - fputc: Ein Zeichen in eine Datei schreiben  
   - fgets: Eine Zeichenkette aus einer Datei lesen  
   - fputs: Eine Zeichenkette in eine Datei schreiben  
   
   <sub><sup>
   ---
   </sup></sub>
   ### **Datei-Positionierung:**  
   - fseek: Die Position in einer Datei setzen  
   - ftell: Die aktuelle Position in einer Datei abrufen  
   - rewind: Die Position in eine Datei auf den Anfang setzen  
   
   <sub><sup>
   ---
   </sup></sub>
   ### **Eingabe/Ausgabe mit Zeichenketten:**  
   - sprintf: Formatierte Ausgabe in eine Zeichenkette  
   - sscanf: Formatierte Eingabe von einer Zeichenkette  

   <sub><sup>
   ---
   </sup></sub>
   ### **Fehlerbehandlung:**  
   - perror: Eine Fehlermeldung ausgeben, basierend auf der zuletzt aufgetretenen Fehlermeldung  
   - feof: Überprüfen, ob das Ende einer Datei erreicht wurde  
   - ferror: Überprüfen, ob ein Fehler beim Lesen/Schreiben aufgetreten ist  
   <sub><sup>
   ---
   </sup></sub>
   ### **Flushing:**  
   - fflush: Den Puffer (Buffer) für eine Datei leeren  

   <sub><sup>
   ---
   </sup></sub>
   ### **Standard-Datei-Zeiger:**  
   - stdin: Standard-Eingabe (Tastatur)  
   - stdout: Standard-Ausgabe (Bildschirm)  
   - stderr: Standard-Fehlerausgabe (Bildschirm)  

   <sub><sup>
   ---
   </sup></sub>
   *Dies ist keine vollständige Liste, aber sie enthält einige der grundlegenden Funktionen, die in der <stdio.h>-Bibliothek definiert sind. 
   Es ist wichtig zu beachten, dass einige Funktionen als veraltet gelten (wie gets) und aus Sicherheitsgründen vermieden werden sollten.
   Stattdessen sollten sicherere Alternativen wie fgets verwendet werden.*

   </details>
   
  <sub><sup>
  ---
  </sup></sub>
  <!----------------------------------------------------------------------------------->
  <details><summary> string.h ⤵ <sup>Bibliothekn zur string-Bearbeitung: </summary>

   ### **string:**
   - test
   - 

   
   </details>
</details>
    
<!--                        
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <string.h>          //  String manipulation functions  
                             //  ->                 
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stdlib.h>          //  Standard Library functions:  
                             //  ->             malloc, free, rand, srand, exit,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <math.h>            //  Mathematical functions:  
                             //  ->             sqrt, pow, sin, cos, tan,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <ctype.h>           //  Character handling functions:  
                             //  ->             isalpha, isdigit, tolower, toupper,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stdbool.h>         //  Boolean type and values:  
                             //  ->             true, false  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stdint.h>          //  Standard integer types:  
                             //  ->             int8_t, uint16_t, int32_t,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <limits.h>          //  Implementation-defined constants:  
                             //  ->             INT_MAX, INT_MIN,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <float.h>           //  Implementation-defined constants for floating-point types:  
                             //  ->             FLT_MAX, FLT_MIN,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <assert.h>          //  Diagnostics:  
                             //  ->             assert  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <errno.h>           //  Error reporting:  
                             //  ->             errno  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <time.h>            //  Time and date functions:   
                             //  ->             time, localtime, strftime,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stdarg.h>          //  Variable arguments:  
                             //  ->             va_start, va_arg, va_end,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stddef.h>          //  Standard definitions:  
                             //  ->             NULL  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <signal.h>          //  Signal handling:  
                             //  ->             signal  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <setjmp.h>          //  Non-local jumps:  
                             //  ->             setjmp, longjmp  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <locale.h>          //  Localization:  
                             //  ->             setlocale  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <wchar.h>           //  Wide character functions:  
                             //  ->             wprintf, wscanf, wcslen,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <wctype.h>          //  Wide character classification and mapping functions:  
                             //  ->             iswalpha, towlower, towupper,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <fenv.h>            //  Floating-point environment:  
                             //  ->             feclearexcept, fegetround, feraiseexcept,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <inttypes.h>        //  Format conversion of integer types:  
                             //  ->             PRId32, PRIu64, SCNd16, SCNu8,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <iso646.h>          //  Alternative operator spellings:  
                             //  ->             and, or, not,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stdalign.h>        //  Alignments:  
                             //  ->             alignas, alignof  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stdatomic.h>       //  Atomic types:  
                             //  ->        atomic_flag, atomic_init, atomic_load, atomic_store,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <stdnoreturn.h>     //  No return function declaration:  
                             //  ->             noreturn  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <uchar.h>           //  UTF-16 and UTF-32 character utilities:  
                             //  ->             char16_t, char32_t, u16string, u32string,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <tgmath.h>          //  Type-generic math:  
                             //  ->             cabs, carg, cimag, creal,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
#include <complex.h>         //  Complex arithmetic:  
                             //  ->             cabs, carg, cimag, creal, cexp, clog, cpow,...  
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯//  
  -->
</details>


  ---

<details>
  <summary> variables ⤵ <sup>with Examples</sup> </summary>
    
- Ganzzahlige Typen  
    - **int** integerVariable = 42;  
      >  4-Byte-Ganzzahl (-2,147,483,648 bis 2,147,483,647)  
    - **short** shortVariable = 10;  
      >  2-Byte-Ganzzahl (-32,768 bis 32,767)  
    - **long** longVariable = 1234567890;  
      >  Mindestens 4-Byte-Ganzzahl (-2,147,483,648 bis 2,147,483,647)  
    - **long long** longLongVariable = 1234567890123456789LL;  
      >  Mindestens 8-Byte-Ganzzahl (-9,223,372,036,854,775,808 bis 9,223,372,036,854,775,807)  

- Gleitkommazahlen  
    - **float** floatVariable = 3.14f;
      >  4-Byte-Gleitkommazahl (1.2E-38 bis 3.4E+38 mit sechs Dezimalstellen Genauigkeit)  
    - **double** doubleVariable = 3.14159265359;  
      >  8-Byte-Gleitkommazahl (2.3E-308 bis 1.7E+308 mit 15 Dezimalstellen Genauigkeit)  

- Zeichen  
    - **char** charVariable = 'A';  
      > Einzelnes Zeichen (im Allgemeinen -128 bis 127 oder 0 bis 255, je nach Vorzeichen)  

- Vorzeichenlose Ganzzahlen  
    - **unsigned int** unsignedIntVariable = 100; 
      >  Vorzeichenlose 4-Byte-Ganzzahl (0 bis 4,294,967,295)  
    - **unsigned short** unsignedShortVariable = 200; 
      >  Vorzeichenlose 2-Byte-Ganzzahl (0 bis 65,535)  
    - **unsigned long** unsignedLongVariable = 300; 
      >  Mindestens 4-Byte vorzeichenlose Ganzzahl (0 bis 4,294,967,295)  
    - **unsigned long long** unsignedLongLongVariable = 400; 
      >  Mindestens 8-Byte vorzeichenlose Ganzzahl (0 bis 18,446,744,073,709,551,615)  

- Boolescher Typ  
    - **_Bool** boolVariable = 1;  
      >  Wahr (true) oder falsch (false)  

- Void-Typ (wird oft für Funktionen ohne Rückgabewert verwendet)  
    - **void** voidPointer;  
  
</details>


<!--  

<sub><sup>
---
</sup></sub>

