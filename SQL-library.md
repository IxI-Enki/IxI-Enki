<!--  library to learn SQL   📓📚  -->

![Lamassu_sql](https://github.com/IxI-Enki/IxI-Enki/blob/main/.dev/visual/Lamassu_Ressources_SQL%20%5B(Kopfzeile)(tiny)%5D.png?raw=true)

    𝖘𝖊𝖆𝖗𝖈𝖍 𝖓𝖔 𝖋𝖚𝖗𝖙𝖍𝖊𝖗                                  𝕽𝖆𝖎𝖘𝖊 𝖄𝖔𝖚𝖗 𝖘𝕶𝖎𝖑𝖑𝖘                                  𝖗𝖊𝖆𝖉 𝖙𝖍𝖊 𝖒𝖆𝖓𝖚𝖆𝖑𝖘
    
<!-- Übungen -->
## ***SQL - Beispiele :***
*<details><summary> erledigt*   ⤵  <sup><sup>[klick] ⇢ *einblenden*</sub></sup>    </summary>

- Uebung-000 -- `ᴇᴍᴘᴛʏLɪɴᴋ`
- Uebung-001 -- `ᴇᴍᴘᴛʏLɪɴᴋ`
- Uebung-002 -- `ᴇᴍᴘᴛʏLɪɴᴋ`
- ... Links werden nachgereicht ...

- Uebung-006 -- [ADAT Persontabelle](https://github.com/IxI-Enki/Uebung-dbi-006)
-
  
---
</details>

<!-- NÄCHSTE Übungen -->
▷   *zu erledigen*   🔜

-
-

---
<!------------------------------------------------------------ CHEAT SHEET ------------------------------------------------------------>
*<details><summary> SQL CHEAT SHEET*   ⤵  <sup><sup>[klick] ⇢ *einblenden*</sub></sup>    </summary>

```sql
drop table CITY;
drop table CITY CASCADE CONSTRAINTS;      -- löscht auch alle references auf table CITY
/*                  Spalten  |  Datentyp   |   Constraint  (foreign key) */
create table CITY ( PLZ         char(4)        primary key,
                    "NAME"      varchar(30));

drop table PERSON;
/*                  Spalten  |  Datentyp  |  Constraint  (foreign key) */
/*-----TABLES ERSTELLEN------------------------------------------------------*/
create table PERSON(PID         number       primary key,
                    FIRSTNAME   varchar(30)  default 'abc',
                    LASTNAME    varchar(30)  NOT NULL,
                    PLZ         char(4)      references     CITY(PLZ));

/*-----TABLES ERWEITERN / SPALTEN EINFüGEN/LöSCHEN---------------------------*/
alter table PERSON add                                   -- ADD         : fügt eine weitere Spalte zu einem bestehenden Table
                    GEBDATE     date        NOT NULL;    ----- auch CONSTRAINTS können nachträglich hinzugefügt werden

alter table PERSON drop column                           -- DROP COLUMN : entfernt eine Spalte wieder
                    GEBDATE;

alter table PERSON modify                                -- MODIFY      : DATENTYP von Spalte im nachhinein verändern
                    FIRSTNAME   varchar (40);

alter table PERSON rename column                         -- RENAME      : Spalten umbenennen
                    LASTNAME to NEW_LASTNAME;

/*-----WERTE IN [TUPLE=]ZEILEN EINFüGEN--------------------------------------*/
insert into PERSON values (1, NULL, 'Mayr', NULL);       -- Werte in alle Spalten
insert into PERSON (PID, LASTNAME) values (2, 'Müller'); -- ausgewählte Werte

---- alle WERTE von PERSON AUSGEBEN:
select * from PERSON;

/*-----NEUER TABLE AUS EXISTIERENDEM-----------------------------------------*/
create table SCHUELER as(select * from PERSON);   -- ACHTUNG CONSTRAINTS WERDEN NICHT VOLLSTäNDIG üBERNOMMEN

---- alle WERTE von SCHUELER AUSGEBEN:
select * from SCHUELER;

/*-----ZUSAMMENGESETZTE KEYS------------------------------------------------*/
create table VERKNUEPFUNG(ID_1 number,
                          ID_2 number,
                                                           primary key(ID_1, ID_2),
                                                           foreign key(ID_1)        references TAB_1(ID_1),
                                                           foreign key(ID_2)        references TAB_2(ID_2));
/*----FUNKTIONAL GLEICH, CONSTRAINTS BENANNT .. dadurch ANSPRECHBAR----------*/
create table VERKNUEPFUNG(ID_1 number,
                          ID_2 number,
                               constraint VERKNUEPFUNG_PK  primary key(ID_1, ID_2),
                               constraint TAB_1_FK         foreign key(ID_1)        references TAB_1(ID_1),
                               constraint TAB_1_FK         foreign key(ID_2)        references TAB_2(ID_2));

```
</details>

---
<!--  🧠by: github.com/IxI-Enki💭  -->
![Lamassu_(x2)](https://github.com/IxI-Enki/IxI-Enki/blob/main/.dev/visual/Lamassu_IxI-Enki%20%5B(Fusszeile)(tiny)%5D.png?raw=true)
