var app = new Vue({
    el: "#app",
    data: {
        cards: {
            approval: {
                title: "Approval",
                link: {
                    vhost: "http://system.omega.approval.loc",
                    htdocs:
                        "http://localhost/omega-package/omega-approval/public"
                },
                img: "assets/img/Capture3.PNG"
            },
            front_office: {
                title: "Report Front Office",
                link: {
                    vhost: "http://system.omega.front-office.loc",
                    htdocs:
                        "http://localhost/omega-package/omega-front-office/public"
                },
                img: "assets/img/Capture1.PNG"
            },
            back_office: {
                title: "Report Back Office",
                link: {
                    vhost: "http://system.omega.back-office.loc",
                    htdocs:
                        "http://localhost/omega-package/omega-back-office/public"
                },
                img: "assets/img/Capture.PNG"
            }
        }
    },
    methods: {
        url(app) {
            if (document.location.pathname.split("/").length < 3) {
                return this.cards[app].link.vhost;
            }
            return this.cards[app].link.htdocs;
        }
    }
});

$(document).ready(function() {
    $("[vue-data]").fadeIn("slow");
});
