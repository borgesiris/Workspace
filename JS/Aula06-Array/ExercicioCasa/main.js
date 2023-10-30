    //UNIDIMENCIONAL
    
    var infos1 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995] 
    console.log(infos1)

    //Propriedade Length
    let metodo1 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995] 
    console.log(metodo1.length)

    //Acessando JS
   let metodo2 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995] 
   console.log(metodo2[6])

    //Método to.String
    var infos2 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995] 
    let metodo3 = infos2.toString() 
    console.log(metodo3)

    //Método Join
    var infos3 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995] 
    let metodo4 = infos3.join(" / ") 
    console.log(metodo4)

    //Método Unshift 
    var infos4 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995] 
    let metodo5 = infos4.unshift('IOS')
    console.log(infos4)
    console.log(metodo5)



    //BIDIMENCIONAL

    var infos5 = [
        ["HTML, 1993, CSS, 1996"],
        ["Bootstrap, 2011, JS, 1995"],
        ["React, 2013, Java, 1995"]
    ]
        console.log(infos5)
        console.log(infos5[2][1]) //Acessando 2013
       
    
        //Alterando JS
        console.log("Antes: " + infos5) 
        infos5[1][2] = "JavaScript"
        console.log("Depois: " + infos5)
    
     