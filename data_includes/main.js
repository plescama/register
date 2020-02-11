    PennController.ResetPrefix(null); // Initiates PennController
    PennController.AddHost("https://amor.cms.hu-berlin.de/home/session/public_html/Bild")
       // "https://amor.cms.hu-berlin.de/~plescama/Bild/"); // loads pictures from external server
    PennController.Sequence("welcome", "experiment", "send", "final")
    // Welcome text /////////////
   

    PennController("welcome",
        defaultText
            .print()
        ,
        newText("text1", "<p>Willkommen zum Experiment</p>")
        ,
        newText("text2", "<p>Humboldt Universit&auml;t zu Berlin, Institut f&uuml;uer Deutsche Sprache und Linguistik</p>")
        ,
        newButton("button1", "Best&auml;tigen")
            .print()
            .wait()
        ,
        getText("text1")
            .remove()
        ,
        getText("text2")
            .remove()
        ,
        getButton("button1")
            .remove()
        ,
        newHtml("consentInfo", "consentInfo.html")
            .settings.log()
            .print()
        ,
        newButton("button2", "Continue")
            .print()
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
        newHtml("instructions", "instructions.html")
            .print()
        ,
        newButton("button3", "continue")
            .print()
            .wait()
        ,
        getHtml("instructions")
            .remove()
        ,
        getButton("button3")
            .remove()
        ,
        newHtml("VPInfo", "VPInfo.html")
            .settings.log() // log inputs in html
            .print()
        ,
        newButton("start")
            .print()
            .wait(
              getHtml("VPInfo").test.complete()
                .failure( getHtml("VPInfo").warn() )
            )
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
        .settings.visible()
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
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Latschen </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Latschen1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Latschen2.jpg")
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
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Wohnung</strong> beschreibt.")
        .print()
    ,
    newImage("one", "Wohnung1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Wohnung2.jpg")
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
    
      PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Lauscher </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Lauscher1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Lauscher3.jpg")
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
    
      PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Lauscher </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Lauscher2.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Lauscher3.jpg")
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
        
     PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Gem&auml;cher </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Gem�cher1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Gem�cher2.jpg")
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
   
      
     PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Kammer </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Kammer1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Kammer2.jpg")
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
        
   PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> P&ouml;tte </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Pötte1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Pötte2.jpg")
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
       
   PennController("experiment",
    newText("W&auml;hlen Sie bitte das Bild, das am Besten das Wort <strong> Gr&uuml;nzeug </strong> beschreibt.")
        .print()
    ,
    newImage("one", "Grünzeug1.jpg")
        .settings.size(150,200)
    ,
    newImage("two", "Grünzeug2.jpg")
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
   
