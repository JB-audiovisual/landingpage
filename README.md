# JB Audiovisual & Tecnologia

Website institucional desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

---

## Requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- Node.js 18.17 ou superior
- npm 9.0 ou superior (ou yarn/pnpm)
- Git

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

---

## Instalacao

### 1. Clonar o repositorio

```bash
git clone <url-do-repositorio>
cd jb_audiovisual_nextjs
```

### 2. Instalar dependencias

```bash
npm install
```

Este comando instalara todas as dependencias listadas no `package.json`, incluindo:

- Next.js 14.2.5
- React 18.3.1
- TypeScript 5.5.4
- Tailwind CSS 3.4.7
- Framer Motion 11.3.8
- Lucide React 0.424.0

---

## Execucao

### Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

O servidor estara disponivel em `http://localhost:3000`.

### Build de Producao

Para gerar os arquivos otimizados para producao:

```bash
npm run build
```

Os arquivos serao gerados no diretorio `.next/`.

### Iniciar em Producao

Apos o build, para iniciar o servidor de producao:

```bash
npm start
```

### Verificacao de Codigo

Para verificar erros de linting:

```bash
npm run lint
```

---

## Estrutura do Projeto

```
jb_audiovisual_nextjs/
├── public/
│   ├── logo.png              # Logo da empresa
│   └── ceo-photo.png         # Foto do CEO
├── src/
│   ├── app/
│   │   ├── globals.css       # Estilos globais e utilitarios
│   │   ├── layout.tsx        # Layout raiz da aplicacao
│   │   └── page.tsx          # Pagina inicial
│   ├── components/
│   │   ├── Navbar.tsx        # Barra de navegacao
│   │   ├── Hero.tsx          # Secao principal
│   │   ├── About.tsx         # Secao sobre o CEO
│   │   ├── Services.tsx      # Secao de servicos
│   │   ├── Clients.tsx       # Secao de clientes
│   │   ├── Pricing.tsx       # Tabela de precos
│   │   ├── Contact.tsx       # Formulario de contato
│   │   └── Footer.tsx        # Rodape
│   └── lib/
│       └── utils.ts          # Funcoes utilitarias
├── tailwind.config.ts        # Configuracao do Tailwind CSS
├── tsconfig.json             # Configuracao do TypeScript
├── next.config.js            # Configuracao do Next.js
└── package.json              # Dependencias e scripts
```

---

## Configuracao de Ambiente

### Variaveis de Ambiente (Opcional)

Crie um arquivo `.env.local` na raiz do projeto para configuracoes especificas:

```env
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

---

## Deploy

### Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faca login
2. Clique em "New Project"
3. Importe o repositorio do GitHub
4. As configuracoes serao detectadas automaticamente
5. Clique em "Deploy"

### Netlify

1. Acesse [netlify.com](https://netlify.com) e faca login
2. Clique em "Add new site" > "Import an existing project"
3. Conecte o repositorio
4. Configure o build command: `npm run build`
5. Configure o publish directory: `.next`
6. Clique em "Deploy"

### Servidor Proprio

1. Execute o build de producao:
   ```bash
   npm run build
   ```

2. Inicie o servidor:
   ```bash
   npm start
   ```

3. Configure um proxy reverso (nginx/apache) para a porta 3000

---

## Tecnologias Utilizadas

| Tecnologia | Versao | Descricao |
|------------|--------|-----------|
| Next.js | 14.2.5 | Framework React com SSR e SSG |
| React | 18.3.1 | Biblioteca para interfaces de usuario |
| TypeScript | 5.5.4 | Superset JavaScript com tipagem estatica |
| Tailwind CSS | 3.4.7 | Framework CSS utility-first |
| Framer Motion | 11.3.8 | Biblioteca de animacoes |
| Lucide React | 0.424.0 | Biblioteca de icones |

---

## Scripts Disponiveis

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de producao |
| `npm start` | Inicia servidor de producao |
| `npm run lint` | Executa verificacao de linting |

---

## Suporte

Para duvidas ou suporte tecnico:

- Email: johnybernard@hotmail.com
- CNPJ: 21.252.112/0001-00

---

## Licenca

Este projeto e proprietario da JB Audiovisual & Tecnologia. Todos os direitos reservados.
