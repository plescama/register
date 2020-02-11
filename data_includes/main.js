    PennController.ResetPrefix(null); // Initiates PennController
    PennController.AddHost("https://amor.cms.hu-berlin.de/~plescama/Bild/")
       // "https://amor.cms.hu-berlin.de/~plescama/Bild/"); // loads pictures from external server
    PennController.Sequence("welcome", randomize("experiment"), "send", "final")
    // Welcome text /////////////
   

    PennController("welcome",
        defaultText
            .print()
        ,
        newText("text1", "<p>Willkommen zum Experiment!</p>")

        ,
        newText("text3", "Danke, dass Du dir die Zeit nimmst, an unserem Experiment teilzunehmen. Bevor es losgeht, brauchen wir noch ein Paar Informationen von Dir.")
        ,
        newButton("button1", "Fortsetzen")
            .print()
            .wait()
        ,
        getText("text1")
            .remove()
 
        ,
        getText("text3")
            .remove()
        ,
        getButton("button1")
            .remove()
        ,
        newHtml("consentInfo", "consentInfo.html")
            .settings.log()
            .print()
        ,
        newButton("button2", "Fortsetzen")
            .print()
            .settings.center()
            .wait(getHtml("consentInfo").test.complete()
                .failure( getHtml("consentInfo").warn() ) // wait and display  warning message if not all the obligatory fields in the html document are filled
             )   
        ,
        getHtml("consentInfo")
            .remove()
        ,
        getButton("button2")
            .remove()
        ,
        newHtml("VPInfo", "VPInfo.html")
            .print()
        ,
        newButton("button3", "Fortsetzen")
            .print()
            .wait()
        ,
        getHtml("VPInfo")
            .remove()
        ,
        getButton("button3")
            .remove()
        ,
        newHtml("instructions", "instructions.html")
            .settings.log() // log inputs in html
            .print()
        ,
        newButton("start", "Experiment starten")
            .print()
            .wait(
              getHtml("instructions").test.complete()
                .failure( getHtml("instructions").warn() )
            )
    )
     
        PennController.CheckPreloaded(
        startsWith("Absteige")
    )
        
        PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Absteige</strong> beschreibt.")
        .print()
    ,
    newImage("one", "Absteige1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Absteige2.jpg")
         .settings.size(150,200)
    ,
    newCanvas(450,200)
        .settings.add(0,0,getImage("one"))
        .settings.add(250,0, getImage("two"))
        .print()
    ,
    newSelector("choice")
        .settings.add(getImage("one"), getImage("two"))
        .settings.once() // the first selection is definitive
        .settings.log()
        .wait()
    ,
    newButton("validation", "Best&auml;tigen")
    .settings.center ()
    .print()
    .wait()
   ,
        
       )
     
   
    PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Behausung </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Behausung1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Behausung2.jpg")
         .settings.size(150,200)
    ,
    newCanvas(450,200)
        .settings.add(0,0,getImage("one"))
        .settings.add(250,0, getImage("two"))
        .print()
    ,
    newSelector()
        .settings.add(getImage("one"), getImage("two"))
        .settings.log()
        .wait()
    ,
    newButton("validation", "Best&auml;tigen")
    .settings.center ()
    .print()
    .wait()
       )
        
       
    PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Behausung </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Behausung1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Behausung2.jpg")
         .settings.size(150,200)
    ,
    newCanvas(450,200)
        .settings.add(0,0,getImage("one"))
        .settings.add(250,0, getImage("two"))
        .print()
    ,
    newSelector()
        .settings.add(getImage("one"), getImage("two"))
        .settings.log()
        .wait()
    ,
    newButton("validation", "Best&auml;tigen")
    .settings.center ()
    .print()
    .wait()
       )
        
    PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Lauscher </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Lauscher1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Lauscher2.jpg")
         .settings.size(150,200)
    ,
    newCanvas(450,200)
        .settings.add(0,0,getImage("one"))
        .settings.add(250,0, getImage("two"))
        .print()
    ,
    newSelector()
        .settings.add(getImage("one"), getImage("two"))
        .settings.log()
        .wait()
    ,
    newButton("validation", "Best&auml;tigen")
    .settings.center()
    .print()
    .wait()
       )
    
  
        
   PennController.SendResults("send")
   PennController("final",
    newText("<p> Das ist das Ende des Experimentes. Vielen Dank f&uuml;r Ihre Teilnahme!</p>")
    .print()
     ,   
    newCanvas("empty6", 1, 10)
    .print()
    ,
    newText("Code", " <p>Wichtiger Hinweis:</p> <p> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb deines Clickworker-Aufgabenformulars ein.<p> </p> Ohne die Eingabe dieses Codes kann eine Gutschrift deines Honorars nicht erfolgen!</p>")
    .print()
    ,
    newCanvas("empty7", 1, 5)
    .print()   
    ,
    newText("Code2", "<b> Code: BILDVERGL20 </b>")
    .print()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Klick' hier um deine Teilnahme zu best&auml;tigen</a></p>")
    .print()
    ,
    newButton("void")
    .wait()  
     )   
   
