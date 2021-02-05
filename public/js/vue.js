Vue.component("navbar", {
	template: `
	            <nav class="container-nav">
                <div class="content-nav">
                    <div class="circle-logo-page" data-tippy-content="🐱‍👤💻🏴‍☠️">
                        <img src="public/assets/img/profile-gray.png" alt="" class="logo-page" />
                    </div>
                    <div class="links-pages">
                        <a href="" class="links-nav" data-tippy-content="Inicio">
                            <span class="icon-home2 i-nav"></span>
                        </a>
                        <a href="" class="links-nav">
                            <span class="icon-user1 i-nav" data-tippy-content="Acerca de"></span>
                        </a>
                        <a href="" class="links-nav">
                            <span class="icon-briefcase i-nav" data-tippy-content="Portafolío"></span>
                        </a>
                        <a href="" class="links-nav">
                            <span class="icon-blog i-nav" data-tippy-content="Contacto"></span>
                        </a>
                        <a href="" class="links-nav" data-tippy-content="Ayuda">
                            <span class="icon-lifebuoy i-nav"></span>
                        </a>
                    </div>
                </div>
            </nav>
	`,
});

Vue.component("redes-sociales", {
	template: `
	            <div class="container-socials">
                <a href="https://facebook.com/jonatanhn00" target="_blank" class="link-social" data-tippy-content="Facebook">
                    <span class="icon-facebook"></span>
                </a>
                <a href="https://instagram.com/jonatanhn00" target="_blank" class="link-social" data-tippy-content="Instagram">
                    <span class="icon-instagram"></span>
                </a>
                <a href="https://twitter.com/jonatanhn00" target="_blank" class="link-social" data-tippy-content="Twitter">

                    <span class="icon-twitter"></span>
                </a>
            </div>
	`,
});

var app = new Vue({
	el: "#app",
	data: {
		message: "Tienes la idea?",
		messageTwo: "Es hora de plasmarla.",
		greeting: "Hola, mi nombre es JonatanHN y soy",
		specialty: "frontend developer",
		username: "jonatanhn",
		repos: [],
	},
});