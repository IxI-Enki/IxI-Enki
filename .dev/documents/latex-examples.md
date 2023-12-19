<!--________________________________________________________________ Beispiele ________________________________________________________________-->
- ## Beispiele:

- <p align="center"> Wir können $\color{red}{Latex\:für\:Mathematischen\:Text\:verwenden.}$ 
<u>und</u>  &nbsp; <kbd>HTML tags</kbd> &nbsp; sup-script &nbsp; <sup>2</sup> &nbsp; </p> 


- oder in Codeblöcken:  
`diff`

```diff
+ grüner Text
```
```diff
- roter Text
```
```diff
! oranger Text
```
```diff
@@ pinker Text @@
```
```diff
# grauer Text
```

<style>{color:DarkOrange;} Task </style>

- [x] ## test
- [~] ~~Inapplicable task~~
- [ ] Incomplete task
  - [x] Sub-task 1
  - [~] ~~Sub-task 2~~
  - [ ] Sub-task 3

1. [x] Completed task
1. [~] ~~Inapplicable task~~
1. [ ] Incomplete task
   1. [x] Sub-task 1
   1. ~~[ ] Sub-task 2~~
   1. [ ] Sub-task 3

  
Inline equation: $equation$


Display equation: $$equation$$


  $\Huge Hello!$
  $\huge Hello!$
  $\LARGE Hello!$
  $\Large Hello!$
  $\large Hello!$
  $\normalsize Hello!$
  $\small Hello!$
  $\scriptsize Hello!$
  $\tiny Hello!$


<pre>
 $\Huge Hello!$
 $\huge Hello!$
 $\LARGE Hello!$
 $\Large Hello!$
 $\large Hello!$
 $\normalsize Hello!$
 $\small Hello!$
 $\scriptsize Hello!$
 $\tiny Hello!$
</pre>


Example:

<pre>$$\small \text{Font size is small, eg. $\sum{x_i = 10}$}$$</pre>

$$
\small 
\text{Font size is small, eg. $
\sum{x_i = 10}$}
$$



- #### Space
  
`\quad`space:- $\quad$ -  
`\qquad`space:- $\qquad$ -  
`\,`_space_   
$
$\$,
$
_space_    

\,$
-space- 
\:$ 
-space- 
\;$ 
-space- 
\!$
-space  


  Horizontal space: `\quad`  
  Large horizontal space: `\qquad`  
  Small space: `\,`  
  Medium space: `\:`  
  Large space: `\;`  
  Negative space: `\!`  

  
- #### Operators



$x + y$ $\quad$ $\quad$ $x - y$ $\quad$ $\quad$ $x \times y$  $\quad$ $\quad$ $x \div y$ $\quad$ $\quad$ $\dfrac{x}{y}$ $\quad$ $\quad$ $\sqrt{x}$ $\quad$ $\quad$

- #### Symbols
  
$\pi \approx 3.14159$

$\pm \, 0.2$

$\dfrac{0}{1} \neq \infty$

$0 < x < 1$

$0 \leq x \leq 1$

$x \geq 10$

$\forall \, x \in (1,2)$

$\exists \, x \notin [0,1]$

$A \subset B$

$A \subseteq B$

$A \cup B$

$A \cap B$

$X \implies Y$

$X \impliedby Y$

$a \to b$

$a \longrightarrow b$

$a \Rightarrow b$

$a \Longrightarrow b$

$a \propto b$

- $\bar a$
- $\tilde a$
- $\breve a$
- $\hat a$
- $a^ \prime$
- $a^ \dagger$
- $a^ \ast$
- $a^ \star$
- $\mathcal A$
- $\mathrm a$
- $\cdots$
- $\vdots$





- #### Equations

$$
\mathbb{N} = 
\{ a 
\in 
\mathbb{Z} : a > 0 
\}
$$

$$
\forall 
\; x 
\in X 
\quad 
\exists 
\; y 
\leq 
\epsilon
$$

$$
\color{blue}{X 
\sim Normal 
\; (
\mu,
\sigma^2)
}$$
 

$$
P 
\left( A=2 
\, 
\middle| 
\, 
\dfrac{A^2}{B}>4 
\right)
$$
 

$$
f(x) = x^2 - x^
\frac{1}{
\pi}
$$

$$
f(X,n) = X_n + X_{n-1}
$$

$$
f(x) = \sqrt[3]{2x} + \sqrt{x-2}
$$
 
 

$$
\mathrm{e} = \sum_{n=0}^{\infty} \dfrac{1}{n!}
$$
 

$$
\prod_{i=1}^{n} x_i - 1
$$
 
 

$$
\lim_{x \to 0^+} \dfrac{1}{x} = \infty
$$

$$
\int_a^b y \: \mathrm{d}x
$$

$$
\log_a b = 1
$$
 

$$
\max(S) = \max_{i:S_i \in S} S_i
$$
 

$$
\dfrac{n!}{k!(n-k)!} = \binom{n}{k}
$$
 

$$
\text{$\dfrac{b}{a+b}=3, \:$ therefore we can set $\: a=6$}
$$


Functions
 
$$
f(x)=
\begin{cases}
1/d_{ij} & \quad \text{when $d_{ij} \leq 160$}\\ 
0 & \quad \text{otherwise}
\end{cases}
$$


Matrices
 
$$
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
$$
 
 
 
 
 
 
 

$$
M = 
\begin{bmatrix}
\frac{5}{6} & \frac{1}{6} & 0 \\[0.3em]
\frac{5}{6} & 0 & \frac{1}{6} \\[0.3em]
0 & \frac{5}{6} & \frac{1}{6}
\end{bmatrix}
$$
  
 

$$ 
M =
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$
  
 

$$ 
M =
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
$$
 

$$
A_{m,n} = 
\begin{pmatrix}
a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
\end{pmatrix}
$$  
