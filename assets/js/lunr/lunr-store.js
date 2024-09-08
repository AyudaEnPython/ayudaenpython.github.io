var store = [{
        "title": "Bienvenidos a nuestro proyecto Ayuda en Python!",
        "excerpt":"Bienvenidos def saludar(nombre: str) -&gt; str: \"\"\"Saludo de bienvenida a los integrantes de la comunidad 'Ayuda en Python'. :param nombre: Nombre de usuario :type nombre: str :return: Mensaje de bienvenida :rtype: str \"\"\" return f\"Hola {nombre.capitalize()}, \" \\ \"'Ayuda en Python' te da la bienvenida!\" if __name__ == \"__main__\": nombre...","categories": [],
        "tags": [],
        "url": "/articulos/bievenido/",
        "teaser": null
      },{
        "title": "Python es de tipado dinámico y fuerte",
        "excerpt":"Python efectivamente es fuertemente tipado y dinámico a la vez, para ello vamos a analizarlo por partes: Tipado dinámico Un lenguaje de programación usa un tipado dinámico cuando la comprobación de tipificación (typing) se realiza durante su ejecución y no en su compilación. 1 &gt;&gt;&gt; numero = 1 &gt;&gt;&gt; print(numero)...","categories": [],
        "tags": [],
        "url": "/articulos/tipado-dinamico-y-fuerte/",
        "teaser": null
      },{
        "title": "Generar números aleatorios",
        "excerpt":"Código original: import random def aleat(datos): suma=0 for n in datos: suma +=n return suma datos=[] felo= random.randint(1, 20) print(\"El tamaño de la lista es: \",felo ) for n in range(felo): crew= random.randint(1, 100) datos.append(crew) #datos= tuple(datos) print(datos) SumaT= aleat(datos) print(\"La suma total e s: \", SumaT) Código refactorizado: from...","categories": [],
        "tags": [],
        "url": "/revisiones/generar-numeros-aleatorios/",
        "teaser": null
      },{
        "title": "Introducción",
        "excerpt":"¿Qué es Python? Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y...","categories": [],
        "tags": [],
        "url": "/tutorial-python/introduccion/",
        "teaser": null
      },{
        "title": "Instalación",
        "excerpt":"Instalación Instalar en Windows Primero seguir las instrucciones de instalación para Chocolatey (gestor de paquetes al estilo de apt-get): Nota: Copiar y ejecutar el siguiente comando en PowerShell Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) Una vez instaldo Chocolatey, instalar Python es sencillo: choco...","categories": [],
        "tags": [],
        "url": "/tutorial-python/instalacion/",
        "teaser": null
      },{
        "title": "Conceptos Básicos",
        "excerpt":"Algoritmo Un algoritmo es un conjunto ordenado y finito de operaciones con el objetivo de realizar una actividad de pasos definidos y así encontrar una solución a cualquier problema la gran mayoría de veces (para mayor informacion puedes seguir este enlace). // Algoritmo para contribuir en un proyecto de código...","categories": [],
        "tags": [],
        "url": "/tutorial-python/conceptos-basicos/",
        "teaser": null
      },{
        "title": "Sintaxis",
        "excerpt":"Variable Un variable conceptualmente es un contenedor etiquetado el cual almacena un valor 1 (para una definición más detallada puedes pulsar aquí). Para definir una variable en Python, simplemente asignamos un valor a un identificador: &gt;&gt;&gt; nombre = \"John\" &gt;&gt;&gt; apellido = \"Doe\" &gt;&gt;&gt; edad = 18 La variable nombre...","categories": [],
        "tags": [],
        "url": "/tutorial-python/sintaxis/",
        "teaser": null
      },{
        "title": "Estructuras de Datos",
        "excerpt":"Una estructura de datos es una forma particular de organizar datos en una computadora para que puedan ser utilizados de manera eficiente. 1 Python ayuda a aprender los fundamentos de estas estructuras de una manera simple comparada a otros lenguajes de programación, ofreciendo en su documentación oficial varios ejemplos. 2...","categories": [],
        "tags": [],
        "url": "/tutorial-python/estructuras-de-datos/",
        "teaser": null
      },{
        "title": "Estructuras de Control Condicionales",
        "excerpt":"Definición   Las estructuras condicionales son aquellas que nos permiten evaluar si una o más condiciones se cumplen para decir que acción vamos a ejecutar. La evaluación de condiciones solo puede arrojar los resultados verdadero o falso (True o False).      En progreso…  ","categories": [],
        "tags": [],
        "url": "/tutorial-python/condicionales/",
        "teaser": null
      },{
        "title": "Estructuras de Control Iterativas",
        "excerpt":"Definición   A diferencia de las estructuras de control condicionales, las iterativas (también llamadas cíclicas o bucles) nos permiten ejecutar un mismo código de manera repetida mientras se cumpla una condición.   En progreso…  ","categories": [],
        "tags": [],
        "url": "/tutorial-python/iterativas/",
        "teaser": null
      },{
        "title": "Funciones",
        "excerpt":"Definición Una función es la forma de agrupar expresiones y sentencias (algoritmos) que realizan determinadas acciones, pero que estas solo se ejecutan cuando son llamadas. Definiendo funciones Para definir funciones en Python se usa la palabra reservada def seguida del nombre de la función y la listas de parámetros formales...","categories": [],
        "tags": [],
        "url": "/tutorial-python/funciones/",
        "teaser": null
      },{
        "title": "Cómo realizar buenas preguntas",
        "excerpt":"Antes de preguntar, intenta encontrar una respuesta: leyendo el manual, libro, tutorial y/o documentación. buscando en la web. preguntándole a un amigo(a) con más experiencia. Prepara tu pregunta y piensa en ella. Las preguntas precipitadas reciben respuestas precipitadas, o ni siquiera eso. Describe el problema y el contexto Un simple...","categories": [],
        "tags": [],
        "url": "/tutoriales/preguntar/",
        "teaser": null
      },{
        "title": "Cómo brindar una mejor ayuda",
        "excerpt":"“Ayudar a otros en línea es dificil. Esperamos preguntas y discusiones técnicas, pero todos los involucrados son solo personas, así que no siempre sale bien”. 1 Si bien es cierto que no existen reglas de cómo ayudar a otros en línea, podemos seguir algunas pautas para lograr que la experiencia...","categories": [],
        "tags": [],
        "url": "/tutoriales/ayudar/",
        "teaser": null
      },{
        "title": "F.A.Q.",
        "excerpt":"En progreso…  ","categories": [],
        "tags": [],
        "url": "/tutoriales/faq/",
        "teaser": null
      },{
        "title": "Listas de Comprensión",
        "excerpt":"Las comprensiones de listas ofrecen una manera concisa de crear listas. Sus usos comunes son para hacer nuevas listas donde cada elemento es el resultado de algunas operaciones aplicadas a cada miembro de otra secuencia o iterable, o para crear un segmento de la secuencia de esos elementos para satisfacer...","categories": [],
        "tags": [],
        "url": "/tutoriales/listas-de-comprension/",
        "teaser": null
      },{
        "title": "Guía de Markdown",
        "excerpt":"Encabezados Para crear un encabezado, agregar entre uno y seis símbolos # antes del encabezado del texto. El número de # que se utilice determirá el nivel jerárquico y el tamaño tipográfico del encabezado. Sintaxis: # Encabezado de primer nivel ## Encabezado de segundo nivel ### Encabezado de tercer nivel...","categories": [],
        "tags": [],
        "url": "/tutoriales/guia-de-markdown/",
        "teaser": null
      }]
