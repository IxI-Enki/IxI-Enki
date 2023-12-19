- #### 3-Ebenen $\color{orange}{Schema}$architektur
<!-- $\color{orange}{Schema}$ architektur -->

$\color{orange}{D}$ aten $\color{orange}{b}$ ank $\color{orange}{m}$ anagement $\color{orange}{s}$ ystem:  

$\color{orange}{DBMS}$ *beschreibt die Ebenen* $\color{red}{extern-konzeptionell-intern}$ :



| Externes Schema: | *Der Zugriff auf die Datenbank erfolgt über dieses Schema* | |  
| ----: | :----- | :---: |  
| Konzeptionelles Schema: | *Beschreibung der Daten & ihre Typen* | *zB.:* `table MITARBEITER hat PERSNR, NAMEN, GEHALT...` |  
|   | *Beschreibung der Felder*| *zB.:* `PERSNR VARCHAR(20)` |  
|  | *Beschreibung der Relationen* | *Cardinalitäten* `1 zu n` / `n zu m` ...  |  
|  |  | *Constraints* `not null` / `< 150`  |  


