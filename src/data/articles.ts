export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  readTime: number;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Elena Rivera rompe su silencio tras el escándalo: 'Era necesario contar la verdad'",
    excerpt: "La actriz de 'Mar de Plástico' finalmente habla sobre las acusaciones que han sacudido el mundo del espectáculo español en las últimas semanas.",
    content: "Elena Rivera, una de las actrices más queridas de la televisión española, ha decidido romper su silencio tras las controversiales declaraciones que han circulado en los medios durante las últimas semanas. En una emotiva entrevista exclusiva, la protagonista de 'Mar de Plástico' reveló detalles íntimos sobre su vida personal y profesional que han mantenido en vilo a sus seguidores.\n\nLa actriz, conocida por su discreción, sorprendió al mundo del espectáculo al decidir hablar abiertamente sobre las acusaciones que han circulado en su contra. 'Llegó el momento de contar mi versión de los hechos', declaró Rivera durante la entrevista, visiblemente emocionada.\n\nSegún fuentes cercanas a la actriz, la decisión de hablar públicamente no fue fácil. Durante meses, Rivera y su equipo legal evaluaron las mejores opciones para abordar la situación sin comprometer su carrera ni su vida privada. Sin embargo, la presión mediática y el impacto en su familia la llevaron a tomar esta decisión.\n\nLas revelaciones de Rivera han generado un gran revuelo en redes sociales, donde sus seguidores han mostrado un apoyo masivo. El hashtag #YoCreoEnElena se convirtió en tendencia nacional en pocas horas, demostrando la lealtad de sus fans.\n\nLa actriz también aprovechó la oportunidad para agradecer a su familia, amigos y colegas del medio artístico que la han apoyado durante este difícil período. 'Sin su apoyo incondicional, no habría podido superar esto', confesó con lágrimas en los ojos.",
    image: "/src/assets/celebrity-1.jpg",
    author: "María González",
    publishDate: "2025-01-15",
    category: "Escándalos",
    readTime: 4,
    featured: true
  },
  {
    id: "2",
    title: "Miguel Herrán sorprende con su nueva relación: fotos exclusivas de su romance secreto",
    excerpt: "El actor de 'La Casa de Papel' fue captado en actitud cariñosa con una misteriosa mujer en las calles de Madrid. Te contamos todos los detalles.",
    content: "Miguel Herrán, el carismático actor que conquistó al público internacional con su papel en 'La Casa de Papel', ha sido el centro de atención mediática tras ser fotografiado en una situación muy íntima con una mujer hasta ahora desconocida para el público.\n\nLas imágenes, obtenidas en exclusiva por nuestros paparazzi, muestran al actor de 28 años paseando de la mano por el barrio de Malasaña en Madrid, en lo que parece ser una cita romántica. La pareja fue vista saliendo de un restaurante de cocina japonesa, uno de los favoritos del actor según fuentes cercanas.\n\nLa misteriosa acompañante, una joven de aproximadamente 25 años, trabajaría en el mundo de la moda según nuestras investigaciones. Su identidad ha sido cuidadosamente protegida por el entorno del actor, quien siempre ha sido muy celoso de su vida privada.\n\nHasta ahora, Miguel Herrán se había mantenido soltero públicamente desde su ruptura con su anterior pareja hace más de un año. El actor, que prefiere mantener un perfil bajo en cuanto a relaciones se refiere, parece haber encontrado de nuevo el amor.\n\nLos fans del actor no han tardado en reaccionar en redes sociales, donde las fotos han generado miles de comentarios y especulaciones sobre la identidad de la nueva novia. Muchos celebran la felicidad del actor, mientras otros expresan su curiosidad por conocer más detalles sobre esta nueva relación.\n\nPor el momento, ni Miguel Herrán ni su representante han hecho declaraciones oficiales sobre estas fotografías.",
    image: "/src/assets/celebrity-2.jpg",
    author: "Carlos Mendoza",
    publishDate: "2025-01-14",
    category: "Relaciones",
    readTime: 3,
    featured: true
  },
  {
    id: "3",
    title: "Aitana anuncia su nuevo álbum con una colaboración internacional que nadie esperaba",
    excerpt: "La cantante catalana revoluciona las redes sociales al revelar su próximo proyecto musical junto a una estrella mundial que mantiene en secreto.",
    content: "Aitana Ocaña ha vuelto a sorprender a sus millones de seguidores con el anuncio de su próximo álbum, que promete ser su trabajo más ambicioso hasta la fecha. La ex triunfita, que se ha consolidado como una de las voces más importantes de la música española actual, reveló a través de sus redes sociales que está trabajando en una colaboración internacional que 'cambiará todo'.\n\nEn un video publicado en Instagram, Aitana aparece en lo que parece ser un estudio de grabación en Los Ángeles, acompañada de productores de renombre mundial. Aunque la artista se mostró misteriosa sobre la identidad de su colaborador, las pistas que ha ido dejando han desatado la especulación entre sus fans.\n\n'Este proyecto representa todo lo que soy como artista y hacia dónde quiero ir', declaró la cantante en el video, donde se la ve visiblemente emocionada. 'La persona con la que estoy trabajando es alguien a quien admiro desde hace años y nunca pensé que tendría la oportunidad de crear música juntos'.\n\nFuentes de la industria musical sugieren que la colaboración podría ser con un artista latino de proyección internacional, lo que abriría nuevas puertas para Aitana en el mercado estadounidense. Su equipo de management ha confirmado que el álbum será lanzado en la primera mitad de 2025.\n\nLa noticia ha generado una ola de expectación entre sus seguidores, quienes han comenzado a especular sobre posibles colaboradores en redes sociales. El hashtag #AitanaColaboracion se ha posicionado entre los más comentados en Twitter España.\n\nAdemás del misterioso dueto, Aitana adelantó que el álbum incluirá canciones en español e inglés, marcando una nueva etapa en su carrera musical internacional.",
    image: "/src/assets/celebrity-3.jpg",
    author: "Laura Fernández",
    publishDate: "2025-01-13",
    category: "Música",
    readTime: 3,
    featured: false
  },
  {
    id: "4",
    title: "Pilar Rubio reaparece tras meses de ausencia: la verdadera razón de su alejamiento de la TV",
    excerpt: "La presentadora y modelo rompe su silencio sobre su ausencia de la televisión y revela los motivos personales que la llevaron a tomar esta decisión.",
    content: "Pilar Rubio, una de las personalidades más queridas de la televisión española, ha reaparecido públicamente tras varios meses de notable ausencia en los medios. La presentadora y modelo, conocida por su participación en programas como 'El Hormiguero' y por ser la esposa del futbolista Sergio Ramos, ha decidido explicar las razones detrás de su alejamiento temporal del mundo del espectáculo.\n\nEn una entrevista íntima concedida a una revista del corazón, Rubio reveló que su decisión de tomarse un descanso profesional estuvo motivada por razones familiares y personales muy importantes para ella. 'Necesitaba estar presente al 100% para mi familia', confesó la presentadora, haciendo referencia a un momento delicado que atravesó su familia.\n\nLa modelo explicó que, aunque siempre ha sabido equilibrar su carrera profesional con su vida personal, llegó un momento en el que sintió que debía priorizar completamente a sus seres queridos. 'Hay momentos en la vida en los que tienes que parar y reevaluar qué es realmente importante', reflexionó.\n\nDurante estos meses de ausencia, Pilar Rubio se ha dedicado completamente a su familia, especialmente a acompañar a sus hijos en diferentes actividades y proyectos personales. También aprovechó este tiempo para formarse en nuevas áreas que siempre le habían interesado pero para las que nunca había tenido tiempo.\n\nLa presentadora adelantó que su regreso a la televisión será gradual y que está evaluando diferentes proyectos que le permitan mantener el equilibrio que ha encontrado entre su vida profesional y personal. 'Quiero volver, pero de una manera que sea compatible con mis prioridades actuales', explicó.\n\nSus seguidores han recibido con gran alegría la noticia de su regreso y han mostrado su apoyo incondicional a través de las redes sociales.",
    image: "/src/assets/celebrity-4.jpg",
    author: "Ana Martín",
    publishDate: "2025-01-12",
    category: "Televisión",
    readTime: 4,
    featured: false
  },
  {
    id: "5",
    title: "ElRubius y TheGrefg protagonizan la polémica del año: la ruptura que nadie vio venir",
    excerpt: "Los dos streamers más famosos de España han puesto fin a su amistad públicamente, generando un terremoto en el mundo de los contenidos digitales.",
    content: "El mundo del streaming español vive uno de sus momentos más tensos tras la ruptura pública de la amistad entre ElRubius y TheGrefg, dos de los creadores de contenido más influyentes del país. Lo que comenzó como diferencias profesionales ha escalado hasta convertirse en una confrontación abierta que ha dividido a la comunidad de seguidores.\n\nTodo comenzó cuando TheGrefg hizo unas declaraciones en su stream sobre la 'falta de compromiso' de algunos colegas con proyectos colaborativos. Aunque no mencionó nombres específicos, los seguidores más atentos identificaron rápidamente las referencias a ElRubius, quien había cancelado su participación en varios eventos conjuntos en los últimos meses.\n\nLa respuesta de ElRubius no se hizo esperar. En un stream improvisado, el popular youtuber expresó su molestia por lo que consideró 'ataques indirectos' y 'falta de comunicación directa'. 'Si tienes algo que decir, dímelo a la cara, no uses tu plataforma para lanzar indirectas', declaró visiblemente molesto.\n\nLa situación se intensificó cuando ambos creadores decidieron 'unfollowarse' mutuamente en todas las redes sociales, un gesto que no pasó desapercibido para sus millones de seguidores. La comunidad de gaming española se ha dividido en dos bandos, con otros streamers intentando mediar en la situación.\n\nFuentes cercanas a ambos creadores sugieren que las diferencias van más allá de lo profesional y tienen que ver con diferentes visiones sobre la responsabilidad de los influencers y el manejo de sus plataformas. Mientras TheGrefg aboga por un mayor compromiso social, ElRubius defiende su libertad creativa y personal.\n\nLa polémica ha generado millones de interacciones en redes sociales y ha puesto en evidencia las tensiones que existen en la industria del contenido digital español. Muchos esperan una reconciliación, pero por el momento, ambos parecen firmes en sus posiciones.\n\nEste conflicto marca un antes y un después en el panorama del streaming español y podría tener consecuencias duraderas en futuras colaboraciones entre grandes creadores de contenido.",
    image: "/src/assets/celebrity-5.jpg",
    author: "Diego Ruiz",
    publishDate: "2025-01-11",
    category: "Influencers",
    readTime: 5,
    featured: false
  },
  {
    id: "6",
    title: "Georgina Rodríguez rompe protocolo real: el gesto que ha indignado a la Casa Real portuguesa",
    excerpt: "La pareja de Cristiano Ronaldo protagoniza un nuevo escándalo tras su comportamiento en un evento oficial. Los detalles de lo que realmente ocurrió.",
    content: "Georgina Rodríguez, la influencer argentina y pareja de Cristiano Ronaldo, se encuentra en el centro de una nueva controversia tras su participación en un evento oficial en Portugal. Su comportamiento durante la ceremonia ha generado críticas y ha sido interpretado como una falta de respeto hacia el protocolo establecido.\n\nEl incidente ocurrió durante una gala benéfica en Lisboa, donde Georgina fue invitada como representante de una fundación internacional. Según testigos presentes en el evento, la influencer llegó con más de 30 minutos de retraso y se negó a seguir las indicaciones del protocolo real establecido para la ocasión.\n\nLo que más llamó la atención fue su decisión de no realizar la reverencia tradicional al ser presentada a miembros de la realeza portuguesa presentes en el evento. Además, según fuentes oficiales, Georgina habría insistido en ser fotografiada en posiciones específicas que alteraron el orden protocolario establecido.\n\nLa situación se complicó aún más cuando la pareja de Ronaldo utilizó su teléfono móvil durante los discursos oficiales, un gesto considerado como una grave falta de etiqueta en este tipo de ceremonias. Las cámaras captaron el momento, que rápidamente se viralizó en redes sociales.\n\nRepresentantes de la Casa Real portuguesa han expresado su 'decepción' por lo ocurrido, aunque de manera diplomática han evitado hacer comentarios públicos directos. Sin embargo, fuentes cercanas aseguran que el incidente ha sido tomado muy en serio y podría afectar futuras invitaciones.\n\nGeorgina, por su parte, se ha defendido a través de sus redes sociales, argumentando que 'no estaba familiarizada con todos los protocolos específicos' y que su intención 'nunca fue faltar el respeto a nadie'. Sin embargo, muchos consideran que sus disculpas llegaron demasiado tarde.\n\nEste no es el primer incidente protocolario protagonizado por la influencer, quien en el pasado ya había generado controversias similares en eventos oficiales. La situación ha reabierto el debate sobre la preparación que deberían tener las personalidades públicas antes de asistir a eventos de carácter oficial.",
    image: "/src/assets/celebrity-6.jpg",
    author: "Isabel Santos",
    publishDate: "2025-01-10",
    category: "Realeza",
    readTime: 4,
    featured: false
  }
];