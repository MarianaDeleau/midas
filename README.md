##Desafío 1 :
Evaluar a nivel general la estructura del proyecto, si tiene buenas bases para escalar, 
si es entendible, mantenible. En el caso de algún comentario o recomendación 
siempre será bienvenida.
La estructura del proyecto está un poco desordenada. Hay algunos componentes 
mezclados y faltan páginas. Sería fundamental reestructurarlo y ordenarlo, 
separando responsabilidades, ordenando en carpetas y creando algunos 
componentes reutilizables. Sería importante implementar linters para restringir 
algunas malas prácticas, importación de datos inútiles, y ordenar el código de forma 
uniforme para todos los dev.
En líneas generales, hay varios componentes importados o variables y estados 
declarados que no se utilizan. 
En cuanto al estilado, hay mezcla de métodos. Hay carpeta de CSS y hay estilados en 
línea. Me parece que hay que unificar el sistema, utilizar carpeta de CSS y estilos por 
clases personalizadas o de boostrap, pero no mezclar ambas cosas, salvo mínimas 
excepciones. 
Mi recomendación sería convertir el proyecto a Typescript para mantener un mejor 
control de los datos con los que estamos trabajando. Eso lo hace mas escalable y 
simple de mantener. Si el proyecto escalara, por ejemplo, para incluir otro tipo de 
medios y recursos de consulta, con una mejor estructura general y typescript sería 
muy sencillo de implementar cambios. 
La estructura del proyecto se puede ordenar de la siguiente forma:
*API
Aquí se pueden definir las llamadas a la API desde el objeto creado con AXIOS.
News, FilteredNews, DetailNew, etc. Estas funciones se encargarían de ir a buscar 
determinada info a la API externa. Como se pueden incorporar nuevas 
funcionalidades a futuro, es óptimo tener esto separado en su carpeta.
*COMPONENTS 
1 FORMS. Login y Signup ok. FilterForm no se está utilizando. 
2 COMMON donde deberían ir componentes como LineSeparator, RegularSeparator 
(es un div muy pequeño que podría ser un margin)
3 LAYOUT aquí deberían ir todos los componentes que definen el layout general del 
sitio. En este caso Header y Footer deberían estar en esta carpeta. Por ejemplo a 
futuro se podría agregar un ASIDE con un panel de filtro por categorias. 
4 PARTS aquí pondría los componentes principales como NewsCards o MainNews 
(refactor de NewsRender en el componente NewsCard, sacándolo del home). 
También pondría aquí el componente <IdleTimerContainer/>
*HOOKS
useUsers. Aquí iría toda la lógica para validar usuarios. 
useNews. Aquí iría toda la lógica para manejar los componentes de noticias. 
*HOC
WithAuth. High Order Component para validar el uso de rutas para los usuarios. Si 
hay usuario logged se renderiza la ruta correspondiente. De esta manera nos 
evitamos consultarlo en cada componente. El withAuth tendría la responsabilidad de 
autenticar cada componente. 
*PAGES
1 LoginPage
2 SignUpPage (registro de usuarios)
3 HomePage
4 DetailPage (despliegue de la noticia)
*TYPES
Si convertimos el proyecto a Typescript (ahora que esta recién iniciado) aquí se 
definirían los typos de los datos con los que tratamos en el proyecto. Ejemplo: News, 
User, etc.
*UTILS
Crear el objeto de Axios para intregar la API 
PUBLIC
- La carpeta STYLES no deberia ir ahí. Cada componente puede tener su archivo de 
Styles o puede haber un Style general linkeado a App JSX o Index JSX
##Desafío 2:
Los desarrolladores dicen ser inexpertos en ReactJs. Cualquier recomendación 
puntual respecto de alguna codificación en especial los ayudará a ordenarse y poder 
encarar el crecimiento propuesto.
ERRORES, INCONSISTENCIAS O COSAS A MEJORAR - DETALLES
Los archivos que renderizan componentes deberían ser JSX. En el caso de que se 
convirtiera a Typescript TSX.
SRC
A. Login Page: 
A1. La lógica del componente debería estar separada en un hook, es decir, todo lo 
referido a la validación de usuarios. 
A2. Define dos estados, pero no su método para modificarlos. El estado 
remenberUserNews no está definido en ningún lado, toma como valor inicial una key 
del localStorage que no se setea en ningún momento.
A3. El user esta hardcodeado, entiendo que es para simplificar la aplicación, por lo 
tanto no existen peticiones a apis externas; el login se valida como usuario loggeado 
contra ese user harcodeado.
A4. Se importa PropTypes y no se utiliza.
A5. Los estilos que se estan pasando a los componentes como prop no se definen en 
nigun lado (style)
B. LoginForm:
B1. Se declaran propTypes y defaultProps y no se utilizan en ninguna parte del 
código. 
B2. Se pasa como valor a initialValues un objeto que no está definido ni importado en
ningún lado. Cuando se invoca en el login llama a un estado que debería tener 
almacenado su valor en el localStorage y que tampoco está seteado el 
remenberUserNews. 
B3. El input e-mail en realidad no está definido como campo de email sino de usuario 
por lo tanto no valida que se coloque un email. (detalle) 
C. Signup
C1. El componente de registro no se importó a ninguna página. 
C2. No se pueden crear usuarios nuevos ya que no hay acceso a niguna base de datos.
C3. En el formulario de Login se redirige a una página SignUp que NO existe, solo 
está declarada su ruta.
D. HomePage:
El componente HomePage es muy extenso, se puede dividir en varios componentes 
que lo hagan más claro, mantenible y escalable. 
D1. useEffect
-La llamada a la api sería mejor separarla en una carpeta correspondiente a API. Yo 
aprendí creando un objeto con axios (en una carpeta Utils donde se pueden crear 
diferentes objetos si hay más de una api para consultar) y luego invocando ese objeto
en API con las diferentes llamadas. Si un proyecto integra más de una api externa, en 
API pueden estar ordenados por archivos de acuerdo a cada api consultada. Por 
ejemplo: esta API provee info de noticias de medios impresos. La App podría escalar 
y agregar a futuro secciones como videos o audios de radio consultando en otras 
Apis. 
-No tiene mucho sentido que la variable de dependencia sea history en el useEffect 
del llamado a la API, si hubiera un paginado podría ponerse la variable que almacene 
ese dato. Lo ideal es manejar las llamadas a las búsquedas por params para poder, 
por ejemplo, compartir una URL de una búsqueda con toda la información. 
De cualquier manera toda esta lógica se debería llevar a un Hook useNews por 
ejemplo. En el Hook se pueden definir funciones que llamen a la API y busquen las 
noticias, que filtren las noticias o que desplieguen una noticia en particular. Se 
pueden guardar en estados que se comparten con el resto de la aplicación. También 
podrían ir agregando funcionalidades con el tiempo, por ejemplo: marcar como vista 
una noticia, compartir la noticia, etc. Toda esa lógica se puede resolver en el hook.
D2. function renderNews
-Puede ser un componente que reciba las noticias como props para limpiar el código 
y separar componentes. 
ej. const NewsCard = (news) => { ... }. Se puede refactorizar el componente para que 
reciba solo las news como props y luego se utiliza el componente en la HomePage.
D3. function _onSearch
-Llevar esta lógica a un Hook useNews
E. Header
E1. const searcherShow = props.searcher !== null && props.searcher !== undefined ? 
props.searcher : true;
const searcher = searcherShow;
No le encuentro funcionalidad a estas variables
Luego al componente en el HOME no se le pasa ninguna prop más que la función de 
búsqueda. 
E2. const [filterModalVisible, setFilterModalVisible] = useState(false) NO SE 
UTILIZA
E3. el RegularSeparator podría ser un simple margin
E4. {
 props.title &&
 <span className={'header-title'}>{props.title}</span>
 }
no le econtré funcionalidad. 
E5. Hay importadas varias cosas que no se utilizan (Prop Types, Tooltip, 
ControlOutlined)
F. MainNews
F1. Los styles los separaria en un archivo CSS o SCSS
F2. La prop style esta declarada pero nunca se utiliza
G. NewsCard
G1. Se puede refactorizar para pasarle los datos de la api en un objeto en lugar de 
pasar las propiedades una por una. 
G2. Se importa PropTypes y no se usa
H. FilterForm
No se importó en ninguna parte del proyecto. Tampoco encontré una propiedad 
"categorías" en el objeto que devuelve la API como para poder insertarlo en 
proyecto. 
##Desafío Opcional (Bonus extra)
Si existe alguna recomendación o comentario específico, sería un bonus extra poder 
contar con algún ejemplo práctico mínimo. No es necesario un proyecto completo, si 
no, un ejemplo mínimo como para reforzar el concepto.
Convertí el proyecto a una estructura más ordenada. La primera opcion, si no se 
puede pasar a Typescript, es utilizar un estructura mas segmentada y con Hooks para
resolver la lógica lo más separada posible de los componentes. Con este tipo de 
estructura pueden agregarse componentes y páginas y escalar el proyecto de manera
más ordenada. 
Agregué un HOC que valide usuarios logueados para no estar haciendo la consulta 
en cada página y para ordenar el acceso a rutas publicas o privadas. 
Separé el HOME en componentes reutilizables y la lógica principal a los hooks 
useNews y useUsers. 
No hice cambios en la forma de estilar ya que la consigna apuntaba a estructura y 
componentes, pero si considero que es algo a mejorar. 
Envio proyecto modificado en una primera instacia.