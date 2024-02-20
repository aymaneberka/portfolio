function MenuMobile(){
    var header=document.querySelector(".header");
    var btn=document.querySelector(".burger");
    var liens=document.querySelectorAll(".navbar a");
    btn.addEventListener("click",()=>{
        header.classList.toggle("show_nav");
    })
    liens.forEach(lien=>{
        lien.addEventListener("click",()=>{
            header.classList.remove("show_nav");
        })
    })
}
MenuMobile();


function filtre(){
    var tabs=document.querySelectorAll(".portfolio_filtre a");
    var projets=document.querySelectorAll(".portfolio .card");
    var reset=()=>{
        tabs.forEach(elem=>{
            elem.classList.remove("active");
        })
    }
    const show=(elem)=>{
        projets.forEach(projet=>{
            var filtre=projet.getAttribute("data-category");
            console.log('filtre:', filtre); // Ajout d'un console.log pour déboguer
            if(elem==="all"){
                projet.parentNode.classList.remove("hide");
                return;
            }
            if(filtre!==elem){
                console.log('Ajout de la classe hide à:', projet); // Ajout d'un console.log pour déboguer
                projet.parentNode.classList.add("hide");
            }else{
                console.log('Suppression de la classe hide de:', projet); // Ajout d'un console.log pour déboguer
                projet.parentNode.classList.remove("hide");
            }
        });
    }
    tabs.forEach(elem =>{
        elem.addEventListener("click",(event)=>{
            event.preventDefault();
            var filtre=elem.getAttribute("data-filter");
            console.log('filtre:', filtre); // Ajout d'un console.log pour déboguer
            show(filtre);
            reset();
            elem.classList.add("active");
        });
    })
}
filtre()

function details(){
    var liens=document.querySelectorAll(".card_link");
    var modals=document.querySelectorAll(".modal");
    var btns=document.querySelectorAll(".modal_close");
    var hide =() =>{
        modals.forEach(elem=>{
            elem.classList.remove("show");
        });
    }
    liens.forEach(elem=>{
        elem.addEventListener("click",(event)=>{
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
       });
    });
    btns.forEach(btn=>{
        btn.addEventListener("click",(event)=>{
            hide();
       });
    });
}
details();

var obs=()=>{
    var sections=document.querySelectorAll("section");
    var skills=document.querySelectorAll(".skills .bar");
    sections.forEach((section,index)=>{
        if(index===0)return;
        section.style.opacity="0";
        section.style.transition="all 1.6s";
    });
    skills.forEach((elem,index)=>{
        elem.style.width="0";
        elem.style.transition="all 1.6s";
    });
    var secobs=new IntersectionObserver(function(inps,observer){
        inps.forEach(inp=>{
            if(inp.isIntersecting){
                var elem=inp.target;
                elem.style.opacity="1";
                console.log(elem);
            }
        });
    });

    sections.forEach(section=>{
        secobs.observe(section);
    });

    var skillobs=new IntersectionObserver(function(inps,observer){
        inps.forEach(inp=>{
            if(inp.isIntersecting){
                var elem=inp.target;
                elem.style.width=elem.dataset.width+"%";
            }
        });
    });

    skills.forEach(skills=>{
        skillobs.observe(skills);
    });
}
obs();