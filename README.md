\# 🚀 EmprendeIA



\*\*EmprendeIA\*\* es una plataforma desarrollada con \*\*Firebase Studio + Genkit + GitHub Actions\*\* que permite a emprendedores integrar IA en sus proyectos, probar cambios y desplegar automáticamente sin borrar nada del trabajo existente.



---



\## ⚙️ Estructura del Proyecto

genkit-app/

│

├── firebase.json

├── firestore.rules

├── storage.rules

├── public/

│ ├── index.html

│ └── logo-emprendeia.png

├── functions/

│ └── src/

│ └── (flujos Genkit, IA, etc.)

└── .github/workflows/

└── firebase-hosting-merge.yml



---



\## 🧠 Flujo de Trabajo Recomendado



\### 1️⃣ Mantén la rama `main` como producción

Todo lo que esté en `main` se despliega automáticamente a \*\*Firebase Hosting\*\*.



\### 2️⃣ Crea ramas para cambios seguros

Cada vez que quieras modificar algo:



```bash

git checkout -b cambios-<nombre>



