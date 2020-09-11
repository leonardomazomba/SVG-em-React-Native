# Utilizar imagens svg em React native e Expo

Instale o expo de forma global com o comando:
```bash
npm install -g expo-cli
```

1. Crie o seu projeto com o expo
```bash
expo init nome_projeto
```

2.Instale a lib [react-native-svg](https://github.com/react-native-community/react-native-svg#installation)
```bash
expo install react-native-svg
```

# Convertendo o código da sua imagem SVG no formato para o React native
1. Abrir sua imagem svg no navegador clique com o direito do mouse e vá na opção "Exibir o codigo fonte da página"

2. Copiar o codigo fonte da imagem e colar 

3. Acessar a pagina https://react-svgr.com/playground/

4. Colar o codigo da sua imagem no quadro SVG input

Criar um componente no Expo - Exemplo: criei em src\Imagens\Icons\king.tsx //Nome da imagem

Colar o codigo gerado no site https://react-svgr.com/playground/ no retorno do componente, 
Não se esqueça de importar da lib react-native-svg todos os objetos que estão sendo utilizados no svg, no meu exemplo importei a svg, {Path, Circle}

Segue abaixo o componente de exemplo

```bash
import React from 'react';
import svg, { Path, Circle } from 'react-native-svg';

const KingIcon: React.FC = () => {
  return (
    <svg height={512} viewBox="0 0 511.962 511.962" width={512} >
    <path
      d="M185.982 405.669l-10 61.119 10 37.673h140l10-37.673-10-61.119c-19.764-14.03-43.917-22.283-70-22.283s-50.235 8.254-70 22.283z"
      fill="#7acefa"
    />
    <path
      d="M294.591 389.695a120.854 120.854 0 00-38.609-6.309c-26.083 0-50.236 8.253-70 22.283l-10 61.119 10 37.673h26.116c0-53.254 34.598-98.612 82.493-114.766zM325.982 405.669v98.792h29.096c12.566 0 22.098-11.469 19.642-23.793-6.144-30.834-24.003-57.441-48.738-74.999z"
      fill="#5dc1ed"
    />
    <path
      d="M185.982 405.669v98.792h-29.096c-12.566 0-22.098-11.469-19.642-23.793 6.145-30.834 24.004-57.441 48.738-74.999z"
      fill="#42acd1"
    />
    <path
      d="M255.983 43.462c-88.366 0-160 71.634-160 160v15.245h320v-15.245c-.001-88.366-71.635-160-160-160z"
      fill="#fcf2d0"
    />
    <path
      d="M282.807 45.713a160.983 160.983 0 00-26.824-2.251c-88.365 0-160 71.634-160 160v15.245h53.648v-15.245c0-79.224 57.583-144.988 133.176-157.749z"
      fill="#efdfb4"
    />
    <circle cx={411.11} cy={234.122} fill="#ffbf9e" r={36.081} />
    <circle cx={100.852} cy={234.122} fill="#f7ab8b" r={36.081} />
    <circle cx={326.671} cy={413.462} fill="#a3defe" r={40} />
    <circle cx={185.085} cy={413.462} fill="#a3defe" r={40} />
    <path
      d="M422.829 257.402a20 20 0 00-19.159-14.261H108.295a20 20 0 00-19.159 14.261c-16.405 54.764 9.322 113.393 60.795 138.267 27.122 13.107 62.021 22.717 106.051 22.717 44.031 0 78.93-9.61 106.052-22.717 51.473-24.874 77.2-83.502 60.795-138.267z"
      fill="#fcf2d0"
    />
    <path
      d="M212.716 395.67c-51.473-24.875-77.2-83.503-60.795-138.268l4.272-14.261h-47.898a20 20 0 00-19.159 14.261c-16.405 54.764 9.322 113.393 60.795 138.268 27.122 13.107 62.021 22.717 106.051 22.717 11.03 0 21.487-.604 31.392-1.714-29.634-3.321-54.331-11.18-74.658-21.003z"
      fill="#efdfb4"
    />
    <path
      d="M400.98 250.225c-.26-44.555-20.32-84.09-51.799-110.433-21.018 14.153-54.932 23.344-93.199 23.344-38.181 0-72.029-9.15-93.058-23.249-31.751 26.599-51.942 66.543-51.942 111.203 0 .38.001.76.004 1.14.234 30.328 25.027 54.732 55.355 54.732H345.62c30.482 0 55.205-24.643 55.359-55.124.004-.537.004-1.075.001-1.613z"
      fill="#ffd4be"
    />
    <path
      d="M197.216 155.208c-13.415-3.923-25.082-9.146-34.291-15.321-31.751 26.599-51.942 66.543-51.942 111.203 0 .38.001.76.004 1.14.234 30.328 25.027 54.732 55.355 54.732h5.805c-7.188-17.196-11.164-36.068-11.164-55.872-.001-36.762 13.684-70.326 36.233-95.882z"
      fill="#ffbf9e"
    />
    <path d="M208.225 271.135a7.5 7.5 0 01-7.5-7.5c0-3.455-2.811-6.265-6.265-6.265s-6.265 2.811-6.265 6.265a7.5 7.5 0 01-15 0c0-11.726 9.54-21.265 21.265-21.265s21.265 9.54 21.265 21.265a7.5 7.5 0 01-7.5 7.5zM331.27 271.135a7.5 7.5 0 01-7.5-7.5c0-3.455-2.811-6.265-6.265-6.265s-6.265 2.811-6.265 6.265a7.5 7.5 0 01-15 0c0-11.726 9.54-21.265 21.265-21.265s21.265 9.54 21.265 21.265a7.5 7.5 0 01-7.5 7.5z" />
    <path
      d="M145.214 289.484c17.134 17.149 44.928 17.155 62.07.014 13.042-13.042 34.188-13.042 47.23 0l.108.108c13.042 13.042 13.042 34.188 0 47.23l-6.521 6.521c-27.07 27.07-70.959 27.07-98.029 0-13.101-13.101-19.861-30.142-20.28-47.309-.199-8.134 9.672-12.319 15.422-6.564z"
      fill="#fff"
    />
    <path
      d="M366.751 289.484c-17.134 17.149-44.928 17.155-62.07.014-13.042-13.042-34.188-13.042-47.23 0l-.108.108c-13.042 13.042-13.042 34.188 0 47.23l6.521 6.521c27.07 27.07 70.959 27.07 98.029 0 13.101-13.101 19.861-30.142 20.28-47.309.198-8.134-9.672-12.319-15.422-6.564z"
      fill="#fff"
    />
    <path
      d="M350.448 19.027c0-6.385-7.395-9.926-12.37-5.923l-25.33 20.386a15.205 15.205 0 01-19.067 0l-28.166-22.669a15.206 15.206 0 00-19.068 0L218.283 33.49a15.206 15.206 0 01-19.068 0l-25.329-20.385c-4.974-4.004-12.37-.463-12.37 5.923 0 0-.009 75.755 94.462 75.755s94.47-75.756 94.47-75.756z"
      fill="#f7ef87"
    />
    <path
      d="M218.283 33.49a15.206 15.206 0 01-19.068 0l-25.329-20.385c-4.974-4.004-12.37-.463-12.37 5.923 0 0-.009 75.755 94.462 75.755-31.387 0-52.868-49.353-37.695-61.293z"
      fill="#efd176"
    />
    <path d="M454.691 234.122c0-19.873-13.376-36.669-31.593-41.891-1.813-27.18-10.257-53.635-24.567-76.769-13.518-21.853-32.024-40.417-53.766-54.041 12.947-20.434 13.183-41.053 13.183-42.395 0-5.868-3.288-11.087-8.58-13.622-5.293-2.535-11.421-1.823-15.992 1.856l-25.331 20.386c-2.799 2.253-6.863 2.253-9.663 0L270.216 4.979c-8.248-6.638-20.222-6.639-28.472 0L213.58 27.647c-2.8 2.253-6.864 2.253-9.663 0L178.588 7.262c-4.571-3.678-10.699-4.39-15.992-1.856-5.292 2.534-8.58 7.754-8.58 13.621 0 .861.145 21.322 12.94 41.846.104.167.217.336.323.503-21.685 13.573-40.156 32.05-53.678 53.818-14.412 23.201-22.914 49.748-24.734 77.037-18.219 5.221-31.596 22.018-31.596 41.892 0 15.325 8.105 29.453 21.016 37.284-4.383 27.846.825 56.757 15.016 81.394a7.497 7.497 0 0010.242 2.756 7.5 7.5 0 002.756-10.242c-14.913-25.892-18.55-57.15-9.98-85.761 1.11-3.705 3.774-6.561 7.163-7.961l.003.695c.128 16.582 6.973 32.567 18.819 44.182.542 19.71 8.51 38.237 22.463 52.189 14.509 14.509 33.799 22.5 54.317 22.5s39.809-7.99 54.318-22.5l2.578-2.578 2.578 2.578c14.509 14.509 33.799 22.5 54.318 22.5s39.809-7.99 54.318-22.5c13.966-13.965 21.937-32.513 22.465-52.244 11.888-11.701 18.734-27.819 18.819-44.537v-.286c3.39 1.4 6.054 4.256 7.164 7.962 15.447 51.566-8.471 105.971-56.874 129.362-30.166 14.578-64.749 21.97-102.788 21.97-38.04 0-72.622-7.392-102.789-21.97-11.467-5.542-21.759-12.951-30.589-22.024a7.5 7.5 0 10-10.749 10.463c8.275 8.501 17.689 15.694 28.029 21.497a47.23 47.23 0 00-2.3 14.609c0 9.479 2.802 18.31 7.605 25.731a127.37 127.37 0 00-15.301 40.011c-1.604 8.047.471 16.313 5.692 22.676a27.462 27.462 0 0021.306 10.083h198.191a27.462 27.462 0 0021.306-10.083c5.221-6.363 7.295-14.628 5.692-22.676a127.285 127.285 0 00-15.404-40.175 47.203 47.203 0 007.499-25.566c0-4.989-.771-9.847-2.27-14.512 23.388-13.103 42.009-33.514 52.852-58.189a124.195 124.195 0 008.941-69.364c12.895-7.834 20.998-21.981 20.998-37.275zm-276.209 262.84h-21.596a12.512 12.512 0 01-9.709-4.597c-2.36-2.877-3.3-6.606-2.578-10.23 2.186-10.971 5.981-21.452 11.256-31.272 6.426 5.033 14.171 8.449 22.627 9.63zm-25.897-83.5c0-2.69.332-5.319.967-7.872 19.367 8.539 40.299 14.394 62.577 17.544-4.12 13.374-16.507 22.828-31.044 22.828-17.92 0-32.5-14.58-32.5-32.5zm165.897 83.5h-125v-36.743c18.444-3.263 33.284-17.092 37.736-35.382 8.098.686 16.349 1.05 24.765 1.05 8.35 0 16.538-.358 24.576-1.034 4.497 18.286 19.499 32.171 37.924 35.391v36.718zm-22.839-73.801c22.277-3.133 43.21-8.972 62.581-17.491.622 2.528.947 5.13.947 7.791 0 17.92-14.58 32.5-32.5 32.5-14.417.001-26.875-9.471-31.028-22.8zm71.722 58.973a12.292 12.292 0 01-2.578 10.231 12.517 12.517 0 01-9.709 4.597h-21.596v-36.496c8.448-1.219 16.178-4.671 22.583-9.734a112.26 112.26 0 0111.3 31.402zM104.244 235.948c-10.477 1.526-19.174 8.891-22.293 19.302l-.067.236c-6.002-5.346-9.613-13.086-9.613-21.363 0-15.76 12.821-28.581 28.581-28.581 3.113 0 6.196.51 9.118 1.491a152.354 152.354 0 00-5.726 28.915zm138.554 102.105c-24.103 24.103-63.32 24.103-87.423 0-11.273-11.274-17.696-26.257-18.085-42.189-.006-.248-.024-1.001.911-1.402.643-.275 1.218-.168 1.708.323 9.704 9.711 22.608 15.062 36.336 15.064h.012c13.724 0 26.626-5.344 36.331-15.049 4.892-4.891 11.395-7.585 18.312-7.585 5.479 0 10.694 1.696 15.058 4.829-3.84 6.322-5.896 13.59-5.896 21.175 0 7.709 2.127 15.087 6.089 21.48zm131.877-42.189c-.389 15.933-6.812 30.916-18.086 42.189-11.676 11.676-27.199 18.106-43.711 18.106s-32.036-6.43-43.711-18.106l-6.521-6.521c-4.891-4.892-7.585-11.395-7.585-18.312s2.694-13.42 7.585-18.312l.108-.108c4.891-4.891 11.395-7.585 18.312-7.585s13.42 2.694 18.312 7.585c9.705 9.705 22.606 15.049 36.331 15.049h.012c13.728-.003 26.632-5.353 36.336-15.064.491-.49 1.066-.598 1.708-.323.935.401.916 1.155.91 1.402zm7.745-13.682a16.824 16.824 0 00-2.75-1.509c-6.263-2.683-13.417-1.305-18.225 3.51-6.871 6.876-16.008 10.665-25.728 10.667h-.008c-9.717 0-18.853-3.784-25.725-10.655-7.725-7.725-17.995-11.979-28.918-11.979-9.205 0-17.939 3.031-25.083 8.604-7.144-5.572-15.879-8.604-25.083-8.604-10.924 0-21.194 4.254-28.918 11.979-6.872 6.872-16.006 10.655-25.725 10.655h-.008c-9.72-.002-18.857-3.791-25.728-10.667-4.809-4.814-11.962-6.192-18.225-3.51-.992.425-1.919.946-2.787 1.533-7.054-8.418-10.935-18.873-11.021-30.034l-.004-1.083c0-38.983 16.395-75.813 45.169-101.89 23.168 13.672 56.397 21.436 92.331 21.436 36.024 0 69.308-7.796 92.481-21.525 28.452 25.788 44.789 62.348 45.016 101.154.003.511.003 1.021 0 1.534-.057 11.302-3.954 21.88-11.061 30.384zM353.995 134.04a7.5 7.5 0 00-9.002-.469c-20.519 13.817-53.793 22.065-89.01 22.065-35.128 0-68.355-8.216-88.881-21.979a7.499 7.499 0 00-8.993.48c-19.18 16.068-33.83 36.275-43.111 58.769a43.712 43.712 0 00-10.971-2.24c4.015-48.643 30.657-91.856 72.483-117.39 14.215 15.114 38.438 29.006 79.468 29.006 7.143 0 14.046-.423 20.519-1.257a7.5 7.5 0 006.479-8.397 7.497 7.497 0 00-8.397-6.479c-5.839.752-12.097 1.134-18.601 1.134-85.529 0-86.943-65.491-86.973-68.3.026-.032.109-.072.179-.035l25.329 20.386c8.25 6.64 20.225 6.639 28.473 0l28.164-22.668c2.799-2.252 6.862-2.253 9.663 0l28.167 22.668c8.248 6.639 20.224 6.638 28.472 0l25.358-20.423c.042 0 .125.041.14.092-.011 1.717-.749 42.257-41.394 59.993a7.501 7.501 0 005.999 13.749c11.928-5.205 21.027-12.023 27.978-19.411 41.77 25.543 68.393 68.763 72.406 117.337a43.738 43.738 0 00-10.896 2.218 151.753 151.753 0 00-43.048-58.849zm76.086 121.444l-.067-.234c-3.118-10.409-11.812-17.773-22.287-19.302a153.244 153.244 0 00-5.692-28.926 28.712 28.712 0 019.075-1.481c15.76 0 28.581 12.821 28.581 28.581 0 8.263-3.611 16.012-9.61 21.362z" />
  </svg>
  );
}

export default KingIcon;
```
