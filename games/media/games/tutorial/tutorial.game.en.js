// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Hora de comer</h1>\
        <img src='media/games/tutorial/tenedor.png' class='float_right'>\
        <p>Son las dos de la tarde, una hora menos en Canarias. Est\u00E1s exhausto\
        tras una maratoniana jornada de trabajo implementando la pr\u00E1ctica 2 de\
        Desarrollo \u00C1gil</p>\
        \
        <p>Vas a la cocina y decides demostrar tus dotes de chef realizando\
        unos macarrones con tomate.</p>\
        \
        <p>Tras cocer los macarrones y echarlos en la sarten. \u00A1Sorpresa! \
        no hay <a href='hub'>tomate frito.</a>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "Comer otra cosa",
        displayOrder: 1
    }),
     situations1: new undum.Situation(
        
        "<p>asdasdasdasdsdasdasdasd\
        </p>",
        {
            heading: "Macarrones sin tomate",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<p>Aunque tienes tanta hambre que te comer\u00EDas un Mamut, misteriosamente te apetece m\u00E1s <a href='sticky'>ir de compras</a>. Adem\u00E1s\
        te puede ser \u00FAtil el paseo para despejar la mente y seguir trabajando la pr\u00E1ctica de Desarrollo \u00C0gil esta tarde. </p>\
         \
        <p></p>\
        \
        <p></p>\
        \
        <p class='transient'>\
        \
        </p>",
        {
            heading: "Macarrones sin tomate",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>Parece una buena decisi\u00F3n. Intentas asegurarte de \
        no olvidar las llaves tocando tu bolsillo derecho.\
        </p>\
        \
        <img src='media/games/tutorial/calle.png' class='float_left'>\
        <p>Cierras la puerta, bajas las escaleras y cuando est\u00E1s a punto de salir te das\
        de que te has dejado la cartera dentro.\
        <p>\
        \
        <p>Vuelves a subir y tras 5 minutos busc\u00E1ndola la encuentras\
        dentro de la mochila. Finalmente por fin sales de casa\
        y te <a href='qualities2'>dirijes hacia el supermercado</a></p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Salir de compras"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
        
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Aunque aparenta ser un atentado contra la salud p\u00FAblica\
        parece una buena soluci\u00F3n. Sin embargo recuerdas que casualemte\
        no te gusta el ketchup.</p>\
        \
        <p>Algo por dentro de dice que deber\u00EDas \
        <a href='hub'>tomar una mejor decisi\u00F3n</a>\
        </p>",
        {
            heading: "Macarrones con ketchup",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    qualities2: new undum.SimpleSituation(
        "<p></p>\
        \
        <p>Parecia que iba a ser un día tranquilo, un día normal. Apenas\
        te encuentras a nadie en la calle, algo raro para ser la hora punta en\
        la que la gente sale del trabajo o del colegio.\
        Tras 5 minutos andando por la escarpada calle que separa tu casa del\
        Polideportivo Municipal. De repente poco a poco\
        el cielo de la ciudad de \u00DAbeda se torna oscuro y\
        una luz verde cae s\u00FAbitamente sobre tus hombros. <a href='quality-types'>Decides girarte</a> \
        para ver que pasa...\
        \
        </p>",
        {
            heading: "Fuera de casa",
            tags: ["topicw"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
   
        "<p>\
        ¡No te lo puedes creeer!</p>\
        \
        <p>Un extraño objeto no identificado con forma de platillo, ovni para los amigos,\
        se alza sobre tus ojos. ¿Cómo puede haber una invasión extraterreste en la\
        provincia de Jaén? En las películas esto solo pasa en Estados Unidos.\
        Ante este tipo de situación, si bien es cierto que no es nada común, cada persona actua \
        de una manera diferente.</p>\
      \
        <p>Hay gente que se <a href='parado'>queda parada por pánico</a>, otra sin embargo \
        <a href='correr'>sale corriendo</a> o <a href='esconderse'>trata de esconderse</a>.\
        \
        \
        <a href='./luck-boost'>a</a> or\
        <a href='./luck-reduce'>b</a>\
        \
        <p>",
        {
        heading: "Al girarte",
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "parado": new undum.SimpleSituation(
        "\
        <p>Aunque no es de las mejores decisiones que tomar cuando te encuentras\
        un ovni por la calle, permaneces inmutable mirandolo fijamente. Quieres moverte\
        pero no puedes. El miedo te hace sentir todo lo que te rodea, hasta la cartera en tu bolsillo derecho.\
        Finalmente ocurre lo peor, eres abducido. Comienza la luz verde a elevarte,\
        aunque le cuesta más de lo normal porque estás pasado de peso.\
        </p>\
        <p>Una vez dentro del ovni. Apareces dentro de una especie de jaula. El miedo inunda tu ser\
        Se abre una puerta como en las películas de la que sale una neblina, poco a poco va aumentando\
        \de tamaño. La sombra tiene tamaño de humano, que raro pensabas que los aliens eran mas pequeños.\
        \
        \¿Hola, eres Gurb? -dijo el extraterreste.\
        No, no lo soy -le respondes.\
        Se te acerca y para tu sorpresa tiene la apariencia de:  <a href='ronaldo'>Cristiano Ronaldo</a>,\
        <a href='victor'>tu profesor de Desarrollo Ágil</a> o <a href='unamuno'>Eduardo Mendoza!</a></p>",
        {
            heading: "Te quedas parado",
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    "correr": new undum.SimpleSituation(
        "\
        <p>Empiezas a correr como no lo has hecho nunca. Incluso más que cuando estas\
        a punto de perder el autobús. Casualmente llevabas los cordones de los zapatos desabrochados \
        y te tropiezas. Se te cae la cartera, inmediatamente la recojes y te levantas. \
        \No tienes escapatoria, acaba ocurriendo lo peor. Eres abducido. Comienza la\
        luz verde a elevarte,\
        aunque le cuesta más de lo normal porque estás pasado de peso.\
        </p>\
        <p>Una vez dentro del ovni. Apareces dentro de una especie de jaula. La rodilla te duele un montón\
        \El miedo inunda tu ser\
        Se abre una puerta como en las películas de la que sale una neblina, poco a poco va aumentando\
        \de tamaño. La sombra tiene tamaño de humano, que raro pensabas que los aliens eran mas pequeños.\
        \
        \¿Hola, eres Gurb? -dijo el extraterreste.\
        No, no lo soy -le respondes.\
        Se te acerca y para tu sorpresa tiene la apariencia de:  <a href='ronaldo'>Cristiano Ronaldo</a>,\
        <a href='victor'>tu profesor de Desarrollo Ágil</a> o <a href='unamuno'>Eduardo Mendoza!</a></p>",
        {
            heading: "Sales corriendo",
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    "esconderse": new undum.SimpleSituation(
        "\
        <p>Estás detrás de un contenedor. Han pasado 5 minutos y el ovni no parece irse\
        Tienes mucho miedo y estas muerto de hambre. Decides moverte poco a poroc reptando por el suelo.\
        Estás en la delgada línea entre parecer un militar o un tonto. Te das cuenta de que se te ha caido la \
        cartera más atrás, vuelves para recojerla y el platillo volante te\
        detecta y se mueve hacia ti. No tienes escapatoria, acaba ocurriendo lo peor. Eres abducido. Comienza la\
        luz verde a elevarte,\
        aunque le cuesta más de lo normal porque estás pasado de peso.\
        </p>\
        <p>Una vez dentro del ovni. Apareces dentro de una especie de jaula. Tienes los pantalones sucios por \
        \arrastrarte por el suelo. El miedo inunda tu ser\
        Se abre una puerta como en las películas de la que sale una neblina, poco a poco va aumentando\
        \de tamaño. La sombra tiene tamaño de humano, que raro pensabas que los aliens eran mas pequeños.\
        \
        \¿Hola, eres Gurb? -dijo el extraterreste.\
        No, no lo soy -le respondes.\
        Se te acerca y para tu sorpresa tiene la apariencia de:  <a href='ronaldo'>Cristiano Ronaldo</a>,\
        <a href='victor'>tu profesor de Desarrollo Ágil</a> o <a href='unamuno'>Eduardo Mendoza!</a></p>",
        {
            heading: "Tratas de esconderte",
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    "ronaldo": new undum.SimpleSituation(
        "\
        <p>¿Por qué eres Cristiano Ronaldo? -le preguntas.\
        \Nuestra especie tiene la capacidad de transformarse en cualquier persona.\
        Hice una consulta indexada de 50 ntuplas de personas famosas de vuestro planeta en nuestra base de datos\
        y adopte la primera apariencia que ví. -te contesta\
        Mmmm...Pues para pasar desapercibido que digamos no es útil esta apariencia ¿Y que haces aquí? -le preguntas\
        Es una historia muy larga, he venido a vuestro planeta en busca de un compañero\
        Concretamente estoy buscando a Gurb, desaparecido en vuestro planeta adoptando la apariencia\
        de Marta Sanchez -te responde.\
        Pues ni idea, no se de quién me hablas. ¿Me puedo ir?-le contestas\
        Sí, sin problema. ¿Donde te dejo? -te responde <a href='final1'>final 1</a></p> ",
        {
            heading: "El extraterreste es Cristiano Ronaldo",
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    "victor": new undum.SimpleSituation(
    "\
        <p>¿Por qué eres Victor? -le preguntas.\
        \Nuestra especie tiene la capacidad de transformarse en cualquier persona.\
        Hice una consulta indexada de 66 ntuplas de personas en la provincia de Jaén y adopte la primera apariencia que ví. -te contesta\
        Mmmm... que casualidad ¿Y que haces aquí? -le preguntas\
        Es una historia muy larga, he venido a vuestro planeta en busca de un compañero\
        Concretamente estoy buscando a Gurb, desaparecido en vuestro planeta adoptando la apariencia\
        de Marta Sanchez -te responde.\
        Pues ni idea, no se de quién me hablas. ¿Me puedo ir?-le contestas\
         ¿Me puedo ir?-le contestas<a href='final2'>final 2</a>\
        Sí, sin problema. ¿Donde te dejo? -te responde\
        En el Supersol -le contestas\
        ¡Espera! se te ha caido la cartera, tómala. -te advierte\
        Ahh, muchas gracias. Menudo problemoón ir a comprar sin dinero...jajaj -le contestas <a href='final2'>final 2</a>\
        </p>",
        {
            heading: "El extraterreste es tu profesor de Desarrollo Ágil",
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    "unamuno": new undum.SimpleSituation(
        "\
        <p>¿Por qué eres Victor? -le preguntas.\
        \Nuestra especie tiene la capacidad de transformarse en cualquier persona.\
        Eduardo Mendoza se forró haciendo un libro sobre mí sin darme ni un duro, ''Sin noticias de Gurb'' \
        o algo así se llamaba...Todo mentira. Desde entonces lo tengo en la lista negra.-te contesta\
        Pues vaya... ¿Y que haces aquí? -le preguntas\
        Es una historia muy larga, he venido a vuestro planeta en busca de un compañero\
        Concretamente estoy buscando a Gurb, desaparecido en vuestro planeta adoptando la apariencia\
        de Marta Sanchez -te responde.\
        Pues ni idea, no se de quién me hablas. ¿Me puedo ir?-le contestas<a href='final2'>final 2</a>\
        Sí, sin problema. ¿Donde te dejo? -te responde\
        En el Supersol -le contestas\
        ¡Espera! se te ha caido la cartera, tómala. -te advierte\
        Ahh, muchas gracias. Menudo problemoón ir a comprar sin dinero...jajaj -le contestas\
        </p>",
       
        {
            heading: "El extraterreste es Miguel de Unamuno",
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    final1: new undum.SimpleSituation(
        "<p>Te depides de tu nuevo amigo alien. Quieres pararte a twitearlo pero\
        tu hambres urge más. Te diriges hacia la lontana puerta del supermercado y\
        recorres esos largos pasillos. A lo lejos ves tu ansiada recompensa, el tomate\
        frito. Si te paras a pensarlo parece un poco subrealista lo que te acaba de pasar.\
        Pero por fin estás en la caja, metes la mano en el bolsillo y...\
        No está la cartera. \
        Algunas palabras irreproducibles salen de tu boca mientras te quedas mirando al infinito.\
        \
        Un extraterreste te ha robado\
        la cartera. Finalmente sigues el camino de vuelta a casa con las manos vacías y sin ganas de comer.\
        \
        FIN\
        </p>",
        {
            
            heading: "Un alienígena te deja en el SuperSol",
            
        }
    ),
    final2: new undum.SimpleSituation(
        "<p>Te depides de tu nuevo amigo alien. Quieres pararte a twitearlo pero\
        tu hambres urge más. Te diriges hacia la lontana puerta del supermercado y\
        recorres esos largos pasillos. A lo lejos ves tu ansiada recompensa, el tomate\
        frito. Si te paras a pensarlo parece un poco subrealista lo que te acaba de pasar.\
        Pero por fin estás en la caja, metes la mano en el bolsillo y...\
        No está la cartera. \
        Algunas palabras irreproducibles salen de tu boca mientras te quedas mirando al infinito.\
        \
        Un extraterreste te ha robado\
        la cartera. Finalmente sigues el camino de vuelta a casa con las manos vacías y sin ganas de comer.\
        Te dispones a abrir la puerta y...¡Lo que te faltaba! Se te han caido las llaves que guardabas\
        en tu bolsillo izquierdo cuando estabas huyendo. Te has quedao sin comer y fuera de casa.\
        \
        \
        FIN\
        </p>",
        {
            
            heading: "Un alienígena te deja en el SuperSol",
            
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topiSc"],
            heading: "Showing a Progress Bara",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topisc"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topisc"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p></p>");
};
