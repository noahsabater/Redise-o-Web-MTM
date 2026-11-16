# Fase 4 del SEO de MTM: 20 fichas ampliadas más + seoTitle/seoDesc.
# Fuente: Fichas técnicas/plantilla/contenido (revisado). Fuera: todo lo que
# está en «dudas» y los reclamos biocidas. Nature Wall: ficha nueva (cal aérea).
import json

R = "/Users/noahsabater/Documents/AvantiFlow/Clientes/Materiales Modernos/Rediseño Web MTM/src/data/"

F = {}
SEO = {}

SEO["activador-liquido"] = ("Activador de óxido líquido para Oxitec Hierro y Cobre",
    "Activador líquido Tixol para oxidar los acabados Oxitec Hierro y Cobre y otras superficies metálicas. Cómo se aplica, secado previo y almacenamiento.")
F["activador-liquido"] = {
 "intro": "Tixol Oxitec Activador Líquido es el activador de óxido que oxida los acabados decorativos Tixol Oxitec Hierro y Cobre, y da su aspecto de metal envejecido. También sirve para oxidar cualquier superficie metálica. Tiene un alto poder de oxidación y viene listo al uso.",
 "usos": ["Oxidar el acabado Tixol Oxitec Hierro.", "Oxidar el acabado Tixol Oxitec Cobre.", "Cualquier superficie metálica que se quiera oxidar.", "Para superficies verticales sin escurridos existe la versión en gel: Tixol Oxitec Activador Gel."],
 "pasos": ["Dejar secar el Oxitec unas 24 horas a 20 °C: el soporte totalmente seco permite controlar el grado de oxidación.", "Lijar suavemente el Oxitec para abrir poro.", "Proteger las superficies cercanas: el activador mancha de óxido lo que toca.", "Remover bien y aplicar con brocha, rodillo, esponja o pulverizador, repitiendo hasta conseguir la oxidación deseada.", "Sellar después como indica la ficha de Oxitec Hierro o Cobre."],
 "datos": [["Presentación", "Líquido, listo al uso"], ["Soporte", "Oxitec Hierro, Oxitec Cobre o metal"], ["Secado previo del Oxitec", "24 horas a 20 °C"], ["Almacenamiento", "12 meses en envase cerrado"]],
 "faq": [{"q": "¿Qué diferencia hay entre el activador líquido y el gel?", "a": "Hacen lo mismo. El gel se queda en su sitio y es mejor en paredes y superficies verticales, donde el líquido podría escurrir."}, {"q": "¿Cuándo se puede aplicar sobre el Oxitec?", "a": "Con el Oxitec totalmente seco: se recomienda esperar 24 horas a 20 °C y lijar suavemente antes de activar."}, {"q": "¿Hay que proteger el acabado después?", "a": "Sí. Una vez conseguido el tono de óxido, se sella como indica la ficha de Oxitec Hierro o Cobre."}]
}

SEO["tixol-revestimiento-elastico-reflexivo"] = ("Pintura térmica reflexiva elástica para cubiertas",
    "Pintura térmica reflexiva Tixol para fachadas y cubiertas: refleja más del 90 % del sol (ensayo CSIC), es elástica y agarra sobre metal.")
F["tixol-revestimiento-elastico-reflexivo"] = {
 "intro": "Tixol Revestimiento Elástico Reflexivo es una pintura térmica reflexiva extrablanca, de resinas acrílicas alifáticas al agua, para fachadas y cubiertas. Refleja la radiación solar y reduce el calor que entra en el edificio: en laboratorio del CSIC su reflexión supera el 90 %. Forma una película muy elástica que acompaña los movimientos de obra y adhiere incluso sobre superficies lisas sin poro.",
 "usos": ["Cubiertas y superficies horizontales no transitables.", "Fachadas y cualquier superficie vertical.", "Aluminio, galvanizado y metales no férricos.", "Como acabado sobre membrana Tixol Corcho Proyectado."],
 "pasos": ["Dejar el soporte duro, limpio y sin polvo, grasa ni humedad. Sobre hierro, eliminar el óxido y pasivar.", "Sobre madera o soportes porosos, imprimar con Tixol Endurecedor de Fondos; sobre superficies muy brillantes, lijar suavemente.", "Aplicar entre 5 °C y 35 °C, con brocha, rodillo o pistola, sin diluir más de un 5 % con agua.", "Dar 2 manos, dejando 12-24 horas entre ellas.", "No aplicar si se prevé lluvia: necesita 72 horas de secado antes de mojarse."],
 "datos": [["Reflexión solar", "Superior al 90 % (laboratorio CSIC)"], ["Rendimiento", "500 g/m² en dos capas"], ["Color", "Blanco puro"], ["Acabado", "Satinado suave"], ["Seco al tacto", "2 horas"], ["Repintado", "12-24 horas"], ["Envase", "15 l (18 kg)"]],
 "faq": [{"q": "¿Sirve para bajar la temperatura de una nave o una cubierta?", "a": "Está pensada para eso: refleja la mayor parte de la radiación solar y reduce el calor que gana la cubierta. El efecto es mayor cuanto más blanca y limpia se mantenga."}, {"q": "¿Se puede pintar de color?", "a": "Admite tintes al agua o universales, pero conviene usar tonos claros: los colores oscuros reducen mucho la reflexión."}, {"q": "¿Se puede pisar?", "a": "No está pensada para cubiertas transitables."}, {"q": "¿Qué diferencia hay con el Revestimiento Térmico Reflexivo?", "a": "El elástico forma una película muy flexible y adhiere sobre metal y superficies lisas, por eso se usa en cubiertas. El Térmico Reflexivo es un revestimiento hidrófugo pensado para fachadas."}]
}

SEO["tixol-revestimiento-termico-reflexivo"] = ("Revestimiento térmico reflexivo para fachadas",
    "Revestimiento hidrófugo Tixol para fachadas que refleja más del 90 % del sol según ensayo CSIC. Acrílico-siloxano, extrablanco y de alta cubrición.")
F["tixol-revestimiento-termico-reflexivo"] = {
 "intro": "Tixol Revestimiento Térmico Reflexivo es un revestimiento hidrófugo de resinas acrílico-siloxano para fachadas, extrablanco y de altísima cubrición. Refleja la radiación solar y reduce la ganancia de calor de la fachada: en laboratorio del CSIC su reflexión supera el 90 %. Sus pigmentos especiales alcanzan la blancura y la opacidad definitivas a las 24 horas.",
 "usos": ["Fachadas expuestas al sol, en obra nueva o renovación.", "Revestimiento de fachadas para proteger del calor.", "Sobre soportes minerales consolidados."],
 "pasos": ["Dejar el soporte duro, limpio y sin polvo, grasa ni humedad.", "En renovación, rascar, eliminar lo mal adherido y consolidar con Tixol Endurecedor de Fondos.", "Aplicar entre 5 °C y 35 °C, con brocha, rodillo o pistola.", "Dar 2 manos, respetando el secado entre ellas.", "No aplicar si se prevé lluvia: necesita 72 horas de secado antes de mojarse."],
 "datos": [["Reflexión solar", "Superior al 90 % (laboratorio CSIC)"], ["Composición", "Resinas acrílico-siloxano"], ["Acabado", "Mate sedoso, blanco puro"], ["Blancura", "97 %"], ["Cubrición", "99 %"], ["Seco al tacto", "2 horas"], ["Envases", "15 l y 4 l"]],
 "faq": [{"q": "¿Por qué recién aplicado no se ve tan blanco?", "a": "Por sus pigmentos especiales, la blancura y la opacidad definitivas se alcanzan a las 24 horas."}, {"q": "¿Se puede teñir?", "a": "Sí, con tintes al agua o universales resistentes al exterior, pero en tonos suaves: los colores oscuros reducen el efecto reflexivo."}, {"q": "¿Pierde eficacia con el tiempo?", "a": "La suciedad acumulada reduce la reflexión, así que conviene limpiar o repintar periódicamente."}]
}

SEO["pintura-termica-reflexiva-interior"] = ("Pintura térmica reflexiva de interior",
    "Pintura térmica Tixol para paredes y techos interiores: barrera infrarroja que ayuda a conservar el calor de la calefacción. Sin olor y lavable.")
F["pintura-termica-reflexiva-interior"] = {
 "intro": "Tixol Pintura Térmica Reflexiva Interior es una pintura de emulsión estireno-acrílica al agua para paredes y techos de viviendas. Su tecnología de barrera infrarroja ayuda a reducir el calor de la calefacción que se pierde a través de los muros. No huele, es lavable y alcanza su máxima blancura y cubrición a las 24 horas.",
 "usos": ["Paredes y techos interiores de viviendas.", "Habitaciones frías o con muros que pierden calor.", "Sobre pinturas antiguas bien adheridas, con imprimación previa."],
 "pasos": ["Dejar el soporte duro, limpio y sin polvo, grasa ni humedad.", "Sobre pinturas antiguas, lijar suavemente y aplicar Tixol Endurecedor de Fondos.", "Aplicar entre 5 °C y 35 °C, con brocha, rodillo o pistola; admite hasta un 15 % de agua.", "Dar 2 manos de unos 200 g/m², con 4-6 horas entre ellas: el efecto depende del espesor."],
 "datos": [["Rendimiento", "200 g/m² por capa"], ["Composición", "Resinas estireno-acrílicas"], ["Acabado", "Mate sedoso, blanco puro"], ["Seco al tacto", "20-30 minutos"], ["Repintado", "3-4 horas"], ["Envases", "4 l y 15 l"]],
 "faq": [{"q": "¿Cuántas manos hay que dar?", "a": "Dos, con el rendimiento indicado (unos 200 g/m² por capa). El efecto aislante depende del espesor aplicado."}, {"q": "¿Huele?", "a": "No. Es una pintura al agua sin olor, pensada para viviendas."}, {"q": "¿Se puede teñir?", "a": "Admite tintes al agua o universales, en tonos claros para no restar eficacia."}, {"q": "¿Sirve para exterior?", "a": "Es de interior. Para fachadas y cubiertas están el Revestimiento Térmico Reflexivo y el Revestimiento Elástico Reflexivo."}]
}

SEO["mortero-de-cal-anti-humedad"] = ("Mortero de cal para paredes con humedad capilar",
    "Mortero de cal aérea Tixol para reparar paredes con humedad capilar: transpirable, sin sales solubles y en pasta lista al uso. Hasta 1 cm por capa.")
F["mortero-de-cal-anti-humedad"] = {
 "intro": "Tixol Mortero de Cal Anti Humedad es un mortero de cal aérea de gran pureza, formulado con cal en pasta envejecida más de 6 meses, para reparar paredes con humedad capilar. Es muy transpirable y permeable al vapor: deja salir la humedad del muro en lugar de encerrarla. Viene en pasta lista al uso, no contiene sales solubles y es resistente al fuego.",
 "usos": ["Zócalos y paredes con humedad capilar.", "Reparación de muros de piedra, ladrillo o mortero.", "Texturas rústicas o fratasadas.", "Rellenos de hasta 1 cm por capa."],
 "pasos": ["Tratar el origen de la humedad: el mortero ayuda a evacuarla, pero no elimina la causa.", "Dejar el soporte mineral sano, duro y sin polvo, grasa ni eflorescencias. Sobre superficies no minerales, aplicar antes Tixol Mortero de Cal de Agarre.", "Humedecer el soporte con agua.", "Aplicar capas de 3 mm a 1 cm, fresco sobre fresco si hace falta más de una, entre 5 °C y 35 °C.", "Fratasar hasta el acabado deseado y proteger del sol directo y las corrientes durante el secado."],
 "datos": [["Rendimiento", "20 kg/m² por cm de espesor"], ["Espesor por capa", "De 3 mm a 1 cm"], ["Permeabilidad al vapor", "µ = 14,7 (UNE-EN 1015-19)"], ["Reacción al fuego", "A1"], ["Presentación", "Pasta blanca, lista al uso"], ["Envase", "Cubo de 20 kg"]],
 "faq": [{"q": "¿Este mortero quita la humedad de la pared?", "a": "Ayuda a que la humedad se evapore porque es muy transpirable, pero no elimina su causa. Si hay humedad capilar, hay que tratar el origen."}, {"q": "¿Se puede aplicar sobre pintura o pladur?", "a": "No directamente. Sobre superficies no minerales hay que aplicar antes Tixol Mortero de Cal de Agarre."}, {"q": "¿Hay que regarlo después de aplicarlo?", "a": "No. Los morteros de cal no se mojan ni se riegan una vez aplicados: el agua los debilita. Lo que sí se hace es humedecer el soporte antes."}, {"q": "¿Se puede pintar o dar color?", "a": "Admite pigmentos, y se puede terminar con Tixol Pintura de Cal para un sistema totalmente natural."}]
}

SEO["tixol-mortero-de-arcilla"] = ("Mortero de arcilla natural para paredes interiores",
    "Mortero de arcilla Tixol para enlucidos decorativos de interior sobre pintura, pladur o yeso. 11 colores naturales, de planchado fino a textura rústica.")
F["tixol-mortero-de-arcilla"] = {
 "intro": "Tixol Mortero de Arcilla es un mortero de arcilla natural para decorar paredes de interior. Se aplica directamente sobre superficies pintadas, cartón yeso, yeso o superficies minerales, y permite desde acabados planchados muy finos hasta texturas rústicas de hasta 5 mm por capa. Tiene una carta de 11 colores naturales y admite paja, cáscara de arroz o vidrio reciclado para crear texturas únicas.",
 "usos": ["Paredes interiores de viviendas, tiendas y restaurantes.", "Transformar paredes pintadas o de pladur en un acabado natural.", "Enlucidos decorativos lisos o rústicos.", "Acabados con fibras o áridos vistos: paja, cáscara de arroz o vidrio."],
 "pasos": ["Dejar el soporte limpio, duro y sin grasa ni humedad; lijar las pinturas poco absorbentes.", "Sobre yeso o cartón yeso, imprimar siempre con Tixol Nature Floor Roc Primer.", "Disolver el pigmento en el agua y mezclar el polvo con un 50 % de agua, con batidor, hasta que no haya grumos.", "Humedecer el soporte y aplicar con llana en una o dos manos, de 1 a 5 mm.", "Para planchar, apretar la arcilla antes de que pierda toda la humedad."],
 "datos": [["Rendimiento", "1,5 kg/m² por mm de espesor"], ["Espesor", "Entre 1 y 5 mm"], ["Agua de amasado", "50 %"], ["Vida de la mezcla", "1 hora"], ["Seco al tacto", "4-6 horas a 20 °C"], ["COV", "0 %"], ["Envase", "Saco de 14 kg"]],
 "faq": [{"q": "¿Se puede aplicar sobre una pared pintada?", "a": "Sí. Está formulado para agarrar sobre superficies pintadas, cartón yeso o yeso. Si la pintura es poco absorbente, conviene lijarla antes."}, {"q": "¿Cuántos colores hay?", "a": "La carta tiene 11 tonos naturales. El pigmento viene en 30 g y 120 g y se mezcla en el agua antes de añadir el polvo."}, {"q": "¿Hay que protegerlo?", "a": "Puede quedar natural o protegerse con Tixol Nature Protect o Tixol Hidrofugante Invisible, que repelen el agua y la grasa sin cambiar su aspecto."}, {"q": "¿Cómo evito diferencias de tono entre amasadas?", "a": "Usando siempre la misma cantidad de agua y el mismo tiempo de amasado."}]
}

SEO["tixol-imprimacion-epoxi-100-solidos"] = ("Imprimación epoxi 100 % sólidos para suelos",
    "Imprimación epoxi bicomponente Tixol, transparente o pigmentada, para preparar suelos de hormigón antes de Epoxi 3D, Metal Colors o Standard Colors.")
F["tixol-imprimacion-epoxi-100-solidos"] = {
 "intro": "Tixol Imprimación Epoxi 100 % Sólidos es una imprimación epoxi bicomponente sin disolventes, en versión transparente y pigmentada (blanco y negro). Prepara los suelos de hormigón y cemento antes de los acabados Tixol Epoxi 3D, Epoxi Metal Colors y Epoxi Standard Colors. Forma una capa dura, ligeramente flexible y resistente a ácidos y álcalis diluidos.",
 "usos": ["Imprimación de suelos que se terminan con Tixol Epoxi 3D, Metal Colors o Standard Colors.", "Garajes y aparcamientos (versión pigmentada).", "Suelos deportivos de interior (versión pigmentada).", "Soportes de hormigón y cemento."],
 "pasos": ["Abrir el poro del hormigón por medios mecánicos (lijado, fresado, granallado) y dejarlo seco, limpio y sin grasa. La humedad del hormigón debe ser inferior al 4 %.", "Agitar cada componente por separado y mezclarlos con batidora lenta (400-500 rpm) para no meter aire.", "Como imprimación, diluir un 10 % con diluyente epoxi.", "Aplicar entre 15 °C y 30 °C, con humedad relativa inferior al 75 %, y usar la mezcla antes de 30-40 minutos.", "Aplicar la capa siguiente antes de 48 horas."],
 "datos": [["Consumo como imprimación", "150-250 g/m²"], ["Sólidos", "100 % en peso y volumen"], ["Seco al tacto", "60 minutos"], ["Repintado", "6-24 horas"], ["Curado total", "15 días"], ["COV", "< 10 g/l"], ["Versiones", "Transparente y pigmentada (blanco y negro)"]],
 "faq": [{"q": "¿Hace falta imprimar antes del Epoxi 3D?", "a": "Sí. La imprimación sella el hormigón y asegura el anclaje del acabado; sin ella pueden aparecer burbujas y faltas de adherencia."}, {"q": "¿Se puede aplicar sobre un suelo ya pintado?", "a": "Hay que eliminar la pintura por medios mecánicos y reparar los defectos del hormigón antes de imprimar."}, {"q": "¿A qué temperatura se aplica?", "a": "Lo ideal es entre 15 °C y 30 °C: por debajo pueden aparecer veladuras y por encima la resina puede precipitar."}]
}

SEO["puente-union-rugoso"] = ("Puente de unión rugoso para azulejo y superficies lisas",
    "Imprimación Tixol con árido de cuarzo para anclar morteros sobre azulejo, hormigón liso o pintura brillante. Interior y exterior, a brocha o rodillo.")
F["puente-union-rugoso"] = {
 "intro": "Tixol Puente Unión Rugoso es una imprimación al agua con árido de cuarzo que crea una superficie rugosa para que morteros y revestimientos agarren sobre soportes lisos y sin poro. Es la forma de enlucir sobre azulejo, hormigón liso o pinturas brillantes sin picar. Se aplica a brocha o rodillo, en interior y exterior.",
 "usos": ["Revestir azulejos con morteros o microcemento.", "Unir hormigón viejo con nuevo.", "Encuentros de tabiquería con pilares.", "Paredes difíciles de pintar y pavimentos viejos que necesitan una nueva capa de compresión."],
 "pasos": ["Dejar el soporte duro, limpio y sin polvo ni grasa.", "Remover hasta que quede homogéneo; se puede diluir hasta un 10 % con agua.", "Aplicar con brocha o rodillo sobre el soporte limpio y seco.", "No aplicar con rocío, soporte recalentado, lluvia o helada prevista.", "Esperar 4-6 horas antes de aplicar el mortero."],
 "datos": [["Consumo", "4-8 m²/kg, según la absorción"], ["Seco al tacto", "10-30 minutos"], ["Recubrible", "A las 4-6 horas"], ["Seco total", "24 horas"], ["Uso", "Interior y exterior"], ["Envases", "1 kg, 5 kg y 15 kg"]],
 "faq": [{"q": "¿Se puede poner microcemento o mortero sobre azulejo?", "a": "Sí, imprimando antes con el Puente Unión Rugoso: su árido de cuarzo da al azulejo el agarre que no tiene."}, {"q": "¿Cuánto hay que esperar para aplicar encima?", "a": "Entre 4 y 6 horas. Seco al tacto está en 10-30 minutos."}, {"q": "¿Cuánto cunde?", "a": "Entre 4 y 8 m² por kilo, según la absorción del soporte."}]
}

SEO["cal-en-pasta-envejecida-encalar"] = ("Cal en pasta envejecida para encalar paredes",
    "Cal aérea en pasta Tixol reposada más de 6 meses para encalar paredes, estucos y esgrafiados. Blanco puro, a rodillo, brocha o pulverizado.")
F["cal-en-pasta-envejecida-encalar"] = {
 "intro": "Tixol Cal en Pasta Envejecida es cal aérea obtenida por hidratación de cal viva y reposada durante más de 6 meses. Es la cal tradicional para encalar paredes de interior y exterior, con un blanco puro. También sirve para estucos y esgrafiados en obra nueva o restauración, y como aglomerante en morteros.",
 "usos": ["Encalado tradicional de paredes interiores y exteriores.", "Estucos y esgrafiados en obra nueva o restauración.", "Aglomerante para morteros de cal.", "En agricultura, como aporte de calcio."],
 "pasos": ["Dejar el soporte duro, limpio y seco, sin restos de pintura ni revestimientos antiguos.", "Si hace falta, diluir con agua para bajar la viscosidad, sin pasarse: el exceso de agua resta cubrición.", "Con calor, humedecer antes el soporte.", "Aplicar a rodillo, brocha o pulverizado en dos o tres capas, entre 5 °C y 35 °C.", "Dejar 2-3 horas entre capas."],
 "datos": [["Acabado", "Blanco puro"], ["Aspecto", "Pasta"], ["pH", "11"], ["Seco al tacto", "30-40 minutos"], ["Repintado", "2-3 horas"], ["Envases", "Cubos de 20 kg y 5 kg"]],
 "faq": [{"q": "¿Por qué se usa cal envejecida?", "a": "El reposo de más de 6 meses da una pasta más fina y plástica, más fácil de aplicar y con mejor cubrición."}, {"q": "¿Cuántas manos hay que dar?", "a": "Normalmente dos o tres, hasta cubrir, dejando 2-3 horas entre ellas."}, {"q": "¿Se puede encalar sobre pintura plástica?", "a": "No es lo indicado: hay que eliminar por completo la pintura o revestimiento antiguo para que la cal agarre."}, {"q": "¿Hay que mojar la pared después?", "a": "No. La cal no se moja una vez aplicada; con calor se humedece el soporte antes de aplicar."}]
}

SEO["tixol-stone-carpet"] = ("Stone Carpet: resina para suelos drenantes de piedra",
    "Resina de poliuretano Tixol Stone Carpet para pavimentos drenantes de árido de mármol: transparente, no amarillea. Alcorques, terrazas y accesos.")
F["tixol-stone-carpet"] = {
 "intro": "Tixol Stone Carpet es una resina de poliuretano bicomponente, alifática y 100 % sólidos, que aglomera áridos de mármol u otras piedras para formar pavimentos drenantes, también llamados «moqueta de piedra». Es totalmente transparente, no amarillea y resiste la intemperie, así que el suelo deja pasar el agua y mantiene el color de la piedra.",
 "usos": ["Pavimentos drenantes en terrazas, patios y accesos.", "Alcorques de jardinería.", "Compactación de áridos en soleras.", "Fabricación de losetas drenantes y consolidación de hormigón."],
 "pasos": ["Delimitar la superficie con encofrado. El soporte debe ser sólido, limpio y seco; lo ideal es hormigón (en alcorques, tierra bien compactada).", "Mezclar los dos componentes en proporción 1:1 en peso.", "Mezclar con el árido (piedra de 2 cm como máximo) en hormigonera, de 15 a 20 kg de árido por kilo de resina, hasta humectar el 100 % de la piedra.", "Verter, repartir y compactar con llana.", "Permitir el paso de personas a las 24 horas y el de vehículos a la semana."],
 "datos": [["Rendimiento", "1 kg de resina por 15-20 kg de árido"], ["Mezcla", "1:1 en peso (resina + endurecedor)"], ["Tránsito de personas", "24 horas"], ["Tránsito rodado", "1 semana"], ["Curado total", "15 días"], ["Sólidos", "100 %"], ["Envases", "Kits de 15 + 15 kg y 4 + 4 kg"]],
 "faq": [{"q": "¿Qué es un pavimento drenante de piedra?", "a": "Un suelo de piedras pequeñas pegadas entre sí con resina, sin rellenar los huecos: el agua lo atraviesa y no se encharca."}, {"q": "¿La resina cambia el color de la piedra?", "a": "Es transparente y no amarillea, aunque en algunas tonalidades puede avivar ligeramente el color del árido."}, {"q": "¿Aguanta el paso de coches?", "a": "Sí, si el soporte es sólido y no se deforma. Se puede circular a la semana de aplicarlo."}, {"q": "¿Cuánta resina necesito?", "a": "1 kg de resina por cada 15-20 kg de árido."}]
}

SEO["mortero-de-cal-de-agarre"] = ("Mortero de cal de agarre sobre azulejo, pintura o pladur",
    "Mortero de cal aérea Tixol que agarra sobre azulejo, pintura, gotelé o pladur. Puente de unión para morteros de cal y renovación hasta 5 mm.")
F["mortero-de-cal-de-agarre"] = {
 "intro": "Tixol Mortero de Cal de Agarre es un mortero de cal aérea con áridos calizos y silíceos, fibra de celulosa y aditivos, pensado para agarrar donde la cal normal no agarra: cerámica, pintura, gotelé, pladur, yeso proyectado y superficies sin poro. Sirve para renovar paredes en espesores de hasta 5 mm y como puente de unión antes de aplicar otros morteros de cal.",
 "usos": ["Renovar azulejos, paredes pintadas, gotelé o metal sin picar.", "Puente de unión sobre materiales no minerales antes de los morteros de cal Tixol.", "Adhesivo de azulejos y piedra natural.", "Interior y exterior."],
 "pasos": ["Dejar el soporte sano, duro y sin polvo, grasa ni eflorescencias.", "Sobre superficies porosas, humedecer pulverizando agua; sobre superficies sin poro, desengrasar bien.", "Mezclar con un 20-30 % de agua y batir hasta que quede homogéneo.", "Aplicar con llana lisa o dentada: la primera mano más fluida y las siguientes fresco sobre fresco, con un máximo de 5 mm por capa.", "Proteger del sol directo y las corrientes durante el secado."],
 "datos": [["Rendimiento", "1 kg/m² por mm de espesor"], ["Espesor", "De 1,5 a 5 mm"], ["Agua de amasado", "20-30 %"], ["Vida de la mezcla", "1 hora"], ["Reacción al fuego", "Euroclase A1"], ["Envase", "Saco de 25 kg"]],
 "faq": [{"q": "¿Se puede aplicar mortero de cal sobre azulejo o pladur?", "a": "Sí, con este mortero. Está formulado para agarrar sobre cerámica, pintura, gotelé y cartón yeso, y después se puede seguir con otros morteros de cal."}, {"q": "¿Qué espesor admite?", "a": "Entre 1,5 y 5 mm por capa."}, {"q": "¿Hay que mojarlo una vez aplicado?", "a": "No. Los morteros de cal no se riegan después de aplicarlos; con calor se humedece el soporte antes."}]
}

SEO["mortero-de-cal-grueso"] = ("Mortero de cal grueso para reparar paredes",
    "Mortero de cal aérea Tixol en pasta para reparar muros y paramentos con rellenos de hasta 1 cm por capa. Natural, transpirable y proyectable.")
F["mortero-de-cal-grueso"] = {
 "intro": "Tixol Mortero de Cal Grueso es un mortero de cal aérea de gran pureza, formulado con cal en pasta envejecida más de 6 meses, para reparar paramentos con rellenos de hasta 1 cm por capa. Es muy transpirable y permeable al vapor, no contiene sales solubles y se puede aplicar a mano o proyectar con máquina de tornillo. Es la base sobre la que se termina con el Mortero de Cal Fino.",
 "usos": ["Reparación de muros y paramentos de piedra, ladrillo o mortero.", "Texturas rústicas o fratasadas.", "Base para enlucir después con Tixol Mortero de Cal Fino.", "Pigmentado, como acabado decorativo planchado."],
 "pasos": ["Dejar el soporte mineral sano, duro y sin pinturas, polvo, grasa ni eflorescencias.", "Humedecer el soporte con agua.", "Aplicar capas de 3 mm a 1 cm, fresco sobre fresco si hace falta más de una, entre 5 °C y 35 °C.", "Fratasar hasta el acabado deseado.", "Durante el secado, evitar el sol directo y las corrientes. No regar una vez aplicado."],
 "datos": [["Rendimiento", "20 kg/m² por cm de espesor"], ["Espesor por capa", "De 3 mm a 1 cm"], ["Permeabilidad al vapor", "µ = 14,7 (UNE-EN 1015-19)"], ["Reacción al fuego", "A1"], ["Presentación", "Pasta blanca, lista al uso"], ["Envase", "Cubo de 20 kg"]],
 "faq": [{"q": "¿Qué diferencia hay entre el mortero de cal grueso y el fino?", "a": "El grueso rellena hasta 1 cm por capa y sirve para reparar; el fino rellena hasta 1 mm y se usa encima para enlucir y planchar."}, {"q": "¿Se puede proyectar?", "a": "Sí, con máquina de tornillo."}, {"q": "¿Sirve sobre pintura o pladur?", "a": "No directamente: el soporte debe ser mineral. Sobre superficies no minerales se usa antes Tixol Mortero de Cal de Agarre."}]
}

SEO["mortero-de-cal-fino"] = ("Mortero de cal fino para enlucir y planchar",
    "Mortero de cal aérea CL 90 Tixol para enlucidos finos, planchados y bruñidos, hasta 1 mm por capa. En pasta, natural y transpirable.")
F["mortero-de-cal-fino"] = {
 "intro": "Tixol Mortero de Cal Fino es un mortero de cal aérea de gran pureza (cal CL 90 según UNE-EN 459-1), formulado con cal en pasta envejecida más de 6 meses. Está pensado para enlucir paredes en capas finas de hasta 1 mm y conseguir acabados planchados o bruñidos de tacto suave. Es muy transpirable y admite pigmentos.",
 "usos": ["Enlucido final sobre Tixol Mortero de Cal Grueso.", "Acabados planchados o bruñidos de textura fina.", "Acabado decorativo pigmentado.", "Sobre piedra o soportes minerales muy finos."],
 "pasos": ["Enlucir antes con Tixol Mortero de Cal Grueso, con la textura más fina posible.", "Humedecer el soporte con agua.", "Aplicar capas finas, de 0,5 a 1 mm, fresco sobre fresco si hace falta más de una, entre 5 °C y 35 °C.", "Para planchar o bruñir, apretar con la llana mientras el material conserva algo de humedad.", "Proteger del sol directo y las corrientes. No regar una vez aplicado."],
 "datos": [["Espesor por capa", "De 0,5 a 1 mm"], ["Tipo de cal", "CL 90 (UNE-EN 459-1)"], ["Permeabilidad al vapor", "µ = 14,7 (UNE-EN 1015-19)"], ["Reacción al fuego", "A1"], ["Presentación", "Pasta blanca, lista al uso"], ["Envase", "Cubo de 20 kg"]],
 "faq": [{"q": "¿Cómo se consigue un acabado planchado de cal?", "a": "Aplicando el mortero fino en capas de hasta 1 mm y apretándolo con la llana cuando aún tiene algo de humedad."}, {"q": "¿Se puede aplicar directamente sobre ladrillo?", "a": "Solo rellena 1 mm, así que el soporte tiene que estar ya enlucido con Tixol Mortero de Cal Grueso o ser un mineral muy fino."}, {"q": "¿Se puede dar color?", "a": "Sí, admite pigmentos."}]
}

SEO["epo-roc"] = ("Epo Roc: mortero epoxi para reparar agujeros en suelos",
    "Mortero epoxi Tixol Epo Roc para reparar agujeros en pavimentos sin límite de espesor ni retracción. Duro, transitable y repintable en 24 horas.")
F["epo-roc"] = {
 "intro": "Tixol Epo Roc es un mortero bicomponente de resina epoxi 100 % sólidos y árido seleccionado para reparar agujeros en pavimentos. No tiene límite de espesor ni retrae, queda extremadamente duro y a las 24 horas se puede pisar y terminar con sistemas epoxi, poliuretano o revestimientos tipo microcemento.",
 "usos": ["Agujeros y desperfectos en pavimentos industriales.", "Rampas de garaje.", "Reparación previa a pavimentos continuos decorativos.", "Reconstrucción de piezas minerales."],
 "pasos": ["Sanear el hueco: eliminar lo mal adherido y los restos de pintura, y dejarlo limpio y seco.", "Sobre superficies muy porosas, sellar antes con una imprimación epoxi.", "Mezclar los componentes A y B y batir con el árido de 2 a 4 minutos, hasta una pasta homogénea.", "Rellenar con espátula o llana hasta enrasar, compactando para que no queden huecos de aire.", "Usar la mezcla antes de 30 minutos y no pisar antes de 24 horas."],
 "datos": [["Rendimiento", "2 kg/m² por cm de espesor"], ["Vida de la mezcla", "30 minutos a 20 °C"], ["Seco total", "24 horas"], ["Repintable", "A las 24 horas"], ["Espesor", "Sin límite"], ["Color", "Arena"]],
 "faq": [{"q": "¿Qué espesor se puede rellenar?", "a": "No tiene límite de espesor y no retrae, así que sirve para agujeros profundos."}, {"q": "¿Cuándo se puede pisar o pintar encima?", "a": "A las 24 horas se puede pisar y recubrir con epoxi, poliuretano o microcemento."}, {"q": "¿Cuánto tiempo hay para trabajar la mezcla?", "a": "Unos 30 minutos a 20 °C. No conviene dejarla en el envase más tiempo: reacciona y se calienta."}]
}

SEO["endurecedor-de-fondos"] = ("Fijador endurecedor de fondos al agua",
    "Fijador al agua Tixol de nanopartícula para consolidar yesos, paredes que harinean y soportes blandos antes de pintar o revestir. Sin olor, 0 % COV.")
F["endurecedor-de-fondos"] = {
 "intro": "Tixol Endurecedor de Fondos es una imprimación al agua de nanopartícula que fija y endurece superficies blandas, harinosas o poco consistentes antes de pintarlas o revestirlas. Penetra incluso en yesos proyectados brillantes y mejora la adherencia de masillas y pinturas. Es incoloro, no huele y no tiene COV. Diluido, también sirve como barniz protector de ladrillo visto o piedra.",
 "usos": ["Paredes que harinean o sueltan polvo.", "Yesos proyectados brillantes antes de pintar.", "Fondos minerales, hormigón, cemento, ladrillo, temple y piedra.", "Diluido hasta un 30 %, como barniz protector de ladrillo visto o piedra natural."],
 "pasos": ["Rascar con cepillo o espátula lo mal adherido y barrer el polvo.", "Aplicar listo al uso, en capa generosa, hasta saturar el soporte.", "Si hace falta, dar más capas fresco sobre fresco.", "Esperar 12 horas a 20 °C: el soporte queda duro y listo para pintar o revestir."],
 "datos": [["Rendimiento", "9-10 m²/l, según la absorción"], ["Seco al tacto", "1 hora"], ["Repintado", "12 horas a 20 °C"], ["Aspecto", "Incoloro"], ["Base", "Resinas acrílicas de nanopartícula, al agua"], ["COV", "0 %"], ["Envase", "4 l"]],
 "faq": [{"q": "¿Qué hago si la pared suelta polvo al tocarla?", "a": "Cepillar lo suelto y aplicar el Endurecedor de Fondos hasta saturar. A las 12 horas la pared queda dura y se puede pintar."}, {"q": "¿Sirve sobre yeso proyectado brillante?", "a": "Sí, es donde mejor funciona: su partícula tan fina penetra en este tipo de yeso y facilita el agarre de la pintura."}, {"q": "¿Cuánto cunde un envase?", "a": "Unos 35-40 m² por envase de 4 litros, según lo que absorba el soporte."}]
}

SEO["spray-15-minutos"] = ("Spray antimanchas para tapar humo, humedad y nicotina",
    "Imprimación antimanchas en aerosol Tixol para aislar manchas de humo, grasa, humedad o nicotina antes de pintar. Interior y exterior, bote de 500 ml.")
F["spray-15-minutos"] = {
 "intro": "Tixol Spray 15 Minutos es una pintura de fondo en aerosol que aísla las manchas de las paredes para que no traspasen la pintura: humo, grasa, humedad, nicotina y otras. Seca rápido, cubre mucho, no amarillea y es lavable. Sirve en interior y exterior y también como fondo blanco para bricolaje y manualidades.",
 "usos": ["Manchas de humo, nicotina o grasa en paredes y techos.", "Cercos de humedad ya secos antes de pintar.", "Hormigón, yeso, piedra y cemento, en interior y exterior.", "Fondo blanco en bricolaje y manualidades."],
 "pasos": ["Dejar la superficie limpia, seca y sin polvo ni grasa.", "Agitar el aerosol un minuto después de oír la bola mezcladora.", "Aplicar en capas finas: mejor tres finas que una gruesa.", "Aplicar entre 5 °C y 45 °C.", "Al terminar, invertir el bote y pulsar para limpiar la válvula."],
 "datos": [["Consumo", "5 m²/l"], ["Seco total", "24 horas a 20 °C"], ["Uso", "Interior y exterior"], ["Acabado", "Blanco, no amarillea"], ["Envase", "Aerosol de 500 ml"]],
 "faq": [{"q": "¿Cómo tapo una mancha de humedad para que no vuelva a salir en la pintura?", "a": "Con la mancha ya seca, se aplica el spray antimanchas en capas finas y después se pinta. Si la humedad sigue activa, hay que resolver antes su causa."}, {"q": "¿Sirve para manchas de humo o tabaco?", "a": "Sí, aísla humo, nicotina, grasa y otras manchas para que no traspasen la pintura final."}, {"q": "¿Se puede usar en exterior?", "a": "Sí, sirve en interior y exterior."}]
}

SEO["hidrofugante-efecto-mojado"] = ("Hidrofugante efecto mojado para piedra y suelos",
    "Barniz hidrofugante Tixol de efecto mojado: protege piedra, hormigón y soportes minerales y realza su color. Interior y exterior, secado rápido.")
F["hidrofugante-efecto-mojado"] = {
 "intro": "Tixol Hidrofugante Efecto Mojado es un barniz hidrofugante de resinas acrílicas puras al disolvente que protege los soportes minerales del agua y, a la vez, realza su color con un aspecto de recién mojado y acabado satinado. Seca rápido y sirve en interior y exterior.",
 "usos": ["Piedra natural, hormigón y soleras que se quieren proteger y avivar de color.", "Protección y consolidación de soleras.", "Obra en ambientes muy húmedos.", "Si se busca proteger sin cambiar el aspecto, está el Hidrofugante Invisible."],
 "pasos": ["Eliminar partes sueltas, desconchados y restos de salitre; el soporte debe estar seco y sin polvo.", "Aplicar con brocha, rodillo de pelo corto o pistola, diluyendo si hace falta con disolvente de clorocaucho o xileno.", "Aplicar hasta saturar el soporte, entre 5 °C y 35 °C.", "Esperar 4 horas para la segunda mano."],
 "datos": [["Rendimiento", "220-300 g/m²"], ["Seco al tacto", "2 horas"], ["Repintado", "4 horas"], ["Secado total", "2 días"], ["Acabado", "Satinado fuerte"], ["Envases", "1 l, 5 l y 25 l"]],
 "faq": [{"q": "¿Qué diferencia hay con el Hidrofugante Invisible?", "a": "Los dos protegen del agua. El Efecto Mojado oscurece y aviva el color y deja brillo satinado; el Invisible no cambia el aspecto del material."}, {"q": "¿Resbala en suelos?", "a": "El acabado satinado puede resultar resbaladizo con agua. En suelos exteriores o zonas mojadas hay que tenerlo en cuenta."}, {"q": "¿Cuánto cunde?", "a": "Entre 220 y 300 g/m², según lo que absorba el soporte."}]
}

SEO["acryflex-pu"] = ("Acryflex PU: membrana impermeabilizante de poliuretano",
    "Membrana de poliuretano al agua Tixol Acryflex PU para impermeabilizar terrazas y cubiertas: elástica, transitable y resistente a UV.")
F["acryflex-pu"] = {
 "intro": "Tixol Acryflex PU es una membrana impermeabilizante de poliuretano en emulsión acuosa, sin disolventes ni betunes, para terrazas y cubiertas. Forma una capa elástica y bien adherida que soporta el movimiento de la estructura, aguanta el tránsito y resiste los rayos UV. Se fabrica en transparente, rojo y blanco; la transparente permite impermeabilizar sin cambiar el aspecto del suelo.",
 "usos": ["Terrazas y cubiertas en obra nueva o reparación.", "Impermeabilizar sobre baldosa sin levantarla (versión transparente).", "Superficies horizontales y verticales, sin descolgarse.", "Sobre cerámica, con Tixol Promotor de Adherencia Acryflex PU."],
 "pasos": ["En soportes absorbentes, imprimar con Tixol Endurecedor de Fondos; sobre cerámica, añadir el Promotor de Adherencia Acryflex PU.", "Aplicar a brocha, rodillo o pistola entre 5 °C y 30 °C (a pistola se puede diluir un 5 % con agua).", "Dar las manos necesarias hasta 1,2-1,5 kg/m², con 12-24 horas entre ellas.", "En la versión transparente, no pasar de 400 g/m² por mano y dar al menos 3 manos.", "No aplicar en zonas sin pendiente donde se encharque el agua."],
 "datos": [["Rendimiento", "Aprox. 1,5 kg/m² (mínimo 1,2 kg/m²)"], ["Repintado", "12-24 horas"], ["Seco al tacto", "2-4 horas"], ["Resistencia UV", "Alifático"], ["Membrana en frío", "Mantiene sus propiedades hasta -30 °C"], ["Colores", "Transparente, rojo y blanco"], ["Envases", "15 l y 4 l"]],
 "faq": [{"q": "¿Se puede impermeabilizar una terraza sin quitar la baldosa?", "a": "Sí, con la versión transparente y el Promotor de Adherencia Acryflex PU sobre la cerámica. Hay que dar al menos 3 manos finas para que siga siendo transparente."}, {"q": "¿Se puede pisar una vez seca?", "a": "Sí, soporta el tránsito y no queda pegajosa."}, {"q": "¿Cuánto producto hace falta?", "a": "Alrededor de 1,5 kg/m² en total, y nunca menos de 1,2 kg/m²."}, {"q": "¿Cómo se guarda?", "a": "Por encima de 7 °C: el producto líquido se estropea con la helada."}]
}

SEO["tixol-nature-wall"] = ("Nature Wall: mortero de cal decorativo para paredes",
    "Mortero de cal aérea Tixol Nature Wall para enlucidos decorativos sobre pladur, yeso o pintura. Interior y exterior, de rústico a planchado.")
F["tixol-nature-wall"] = {
 "intro": "Tixol Nature Wall es un mortero de cal aérea con áridos seleccionados para decorar paredes de interior y exterior. Se aplica directamente sobre superficies minerales, placas de cartón yeso, yeso, hormigón o pintura, y permite desde texturas rústicas hasta fratasados o planchados suaves al tacto, como los enlucidos de cal apretada. Se puede teñir con la carta de colores Nature Wall y es muy transpirable.",
 "usos": ["Paredes de viviendas, hoteles y locales que buscan un acabado natural de cal.", "Restauración de patrimonio y bioconstrucción.", "Transformar pladur o paredes pintadas sin picar.", "Interior y exterior."],
 "pasos": ["Dejar el soporte limpio y sin polvo, grasa ni humedad; rascar lo mal adherido. Sobre soportes poco consistentes, aplicar Tixol Endurecedor de Fondos.", "Disolver el pigmento en el agua y mezclar 25 kg de polvo con un 20 % de agua (hasta un 30 % si se proyecta).", "Humedecer el soporte y aplicar a llana, espátula o máquina, en capas de 1 a 5 mm, entre 5 °C y 35 °C.", "Donde haga falta, armar con malla Tixol Fibra Glass de 160 g.", "Fratasar hasta la textura deseada o humedecer para apretar la cal. Proteger después con Tixol Nature Protect o Tixol Hidrofugante Invisible."],
 "datos": [["Espesor por capa", "De 1 a 5 mm"], ["Agua de amasado", "20 % a llana; hasta 30 % proyectado"], ["Aplicación", "Llana, espátula o máquina"], ["Uso", "Interior y exterior"], ["Pigmentos", "Sobres de 30 g y 120 g"], ["Envase", "Saco de 25 kg"]],
 "faq": [{"q": "¿Se puede aplicar sobre pladur o una pared pintada?", "a": "Sí. Nature Wall está formulado para agarrar directamente sobre cartón yeso, yeso, hormigón y superficies pintadas."}, {"q": "¿Hay que protegerlo?", "a": "Sí, porque la cal puede absorber manchas. Se protege con Tixol Nature Protect o Tixol Hidrofugante Invisible, que no crean capa. En baños con salpicaduras constantes se sella con Hidrofinish y un barniz de poliuretano."}, {"q": "¿Cómo evito diferencias de color entre amasadas?", "a": "Usando siempre la misma cantidad de agua y el mismo tiempo de amasado."}, {"q": "¿Hay que mojarlo una vez aplicado?", "a": "No. Los morteros de cal no se riegan después de aplicarlos; para recubrir una capa ya seca, sí se humedece antes."}]
}

SEO["sistema-nature-floor"] = ("Nature Floor: pavimento continuo de cal natural",
    "Sistema Tixol Nature Floor de cal hidráulica natural para suelos y paredes continuos. Acabado mineral resistente al impacto y la abrasión.")
F["sistema-nature-floor"] = {
 "intro": "Tixol Nature Floor es un sistema de pavimento continuo de cal hidráulica natural NHL 5, áridos seleccionados y resina al agua, para suelos y paredes de interior y exterior. Da un acabado mineral muy natural, sin juntas, y resistente al impacto y a la abrasión. Se fabrica en grano medio y fino y se tiñe con los Nature Floor Toner.",
 "usos": ["Suelos continuos de viviendas, tiendas y restaurantes.", "Paredes y baños con acabado mineral.", "Renovar suelos cerámicos sin levantarlos, con imprimación previa.", "Interior y exterior."],
 "pasos": ["Imprimar: sobre fondos porosos, Tixol Hidro Finish hasta sellar; sobre cerámica, Tixol Nature Floor Roc Primer, rellenando las juntas.", "Mezclar 2 partes de polvo con 1 de Nature Floor Resin (con el toner ya disuelto en la resina); admite hasta un 8 % de agua.", "Aplicar dos capas de grano medio con malla de fibra de 160 g/m².", "Aplicar una o dos capas de grano fino y lijar con grano 100.", "Sellar con Tixol Hidro Finish Nature y proteger con dos capas de barniz de poliuretano."],
 "datos": [["Rendimiento", "1,5 kg/m² por mm de espesor"], ["Mezcla", "2 partes de polvo por 1 de resina"], ["Granulometrías", "Medio y fino"], ["Limpieza", "Con agua"], ["Envases", "14 kg de polvo + 7 kg de resina"]],
 "faq": [{"q": "¿Se puede poner sobre un suelo de baldosa?", "a": "Sí. Se imprima con Tixol Nature Floor Roc Primer y se rellenan las juntas para que no se marquen."}, {"q": "¿Hace falta barnizarlo?", "a": "Sí. El sistema necesita siempre el sellado y el barniz final de poliuretano; sin ellos no resiste el tránsito ni las manchas."}, {"q": "¿Se puede usar en exterior?", "a": "Sí, en interior y exterior. Los toners de la carta resisten el exterior y la alcalinidad de la cal."}, {"q": "¿En qué se diferencia del microcemento?", "a": "Es un pavimento continuo de aspecto parecido, pero su base es cal hidráulica natural en lugar de cemento, con un acabado más mineral."}]
}

assert len(F) == 20 and set(F) == set(SEO)
for k, (t, d) in SEO.items():
    assert len(t) <= 56, (k, len(t), t)
    assert 115 <= len(d) <= 155, (k, len(d))

amp = json.load(open(R + "fichas-ampliadas.json"))
assert not set(F) & set(amp)
amp.update(F)
open(R + "fichas-ampliadas.json", "w").write(json.dumps(amp, ensure_ascii=False, indent=2) + "\n")

prods = json.load(open(R + "products.json"))
hechos = 0
for p in prods:
    if p["slug"] in SEO:
        assert not p.get("seoTitle"), p["slug"]
        p["seoTitle"], p["seoDesc"] = SEO[p["slug"]]
        hechos += 1
assert hechos == 20, hechos
open(R + "products.json", "w").write(json.dumps(prods, ensure_ascii=False, indent=2) + "\n")
print("ok", len(amp), "ampliadas;", hechos, "títulos")
