const container1 = document.querySelector(".container1")

const birthday1 = document.querySelector(".birthday1 button")



birthday1.addEventListener("click",function(){
    setTimeout(function(){
        container1.style.display = "none"
    },100)
    
        const tombolWadah = document.createElement("div")
        tombolWadah.classList.add("tombolWadah")
        const tombolLampu = document.createElement("div")
        tombolLampu.classList.add("tombolLampu")    
        tombolWadah.appendChild(tombolLampu)

        const cahaya = document.querySelector(".cahaya")
        const container = document.querySelector(".container")
        const lampuMati = document.querySelector(".lampuMati")
        const lampuHidup = document.querySelector(".lampuHidup")

        const lampuHidup1 = document.querySelector(".lampuHidup img:nth-child(1)")
        const lampuHidup2 = document.querySelector(".lampuHidup img:nth-child(2)")
        const lampuHidup3 = document.querySelector(".lampuHidup img:nth-child(3)")
        const lampuHidup4 = document.querySelector(".lampuHidup img:nth-child(4)")
        const lampuHidup5 = document.querySelector(".lampuHidup img:nth-child(5)")

        const isiSurat = document.querySelector(".isiSurat")


            const btnLampu = document.createElement("button")
            const teksLampu = document.createTextNode("Nyalakan Lampu")

            btnLampu.appendChild(teksLampu)
            tombolLampu.appendChild(btnLampu)

        setTimeout(function(){
            container.appendChild(tombolWadah)
        },1250)


        tombolLampu.addEventListener("click",function(){
            cahaya.classList.add("cahayaBuka")
            tombolLampu.remove()

            const tombolWadah = document.createElement("div")
            tombolWadah.classList.add("tombolWadah")
    
            const dmus = document.createElement("div")
            dmus.classList.add("musik")
            tombolWadah.appendChild(dmus)

            const mbutton = document.createElement("button")
            const tksMusik = document.createTextNode("Mainkan Musik Spesial Untukmu!")
            mbutton.appendChild(tksMusik)
            dmus.appendChild(mbutton)

            setTimeout(function(){
                container.appendChild(tombolWadah)
            },6000)

            setTimeout(function(){
                lampuMati.style.display = "none"
            },5000)

            setTimeout(function(){
                lampuHidup.style.display = "flex"
            },5000)

        const audio = document.querySelector("#myAudio")
            

        
            dmus.addEventListener("click",function(){
                function lampu(){
                    setTimeout(function(){
                        lampuMati.style.display = "flex"
                        lampuHidup.style.display = "none"
                    },0)

                    setTimeout(function(){
                        lampuMati.style.display = "none"
                        lampuHidup.style.display = "flex"
                    },1000)
                }
    
                lampu()
                setInterval(lampu,2000)
                console.log("Berhasil")


                function randomWarna(){
                    setTimeout(function(){
                        container.style.backgroundColor = "pink"
                        container.style.transition = "1.5s"
                    },0)

                    setTimeout(function(){
                        container.style.backgroundColor = "rgb(255, 80, 109)"
                        container.style.transition = "1.5s"
                    },2000)
                }

                setInterval(randomWarna,3000)
                audio.loop = true;
                audio.play()
                dmus.style.display = "none"
            
                const tombolWadah = document.createElement("div")
                tombolWadah.classList.add("tombolWadah")
                        
                const tombolBanner = document.createElement("div")
                tombolBanner.classList.add("tombolBanner")
                const bannBt= document.createElement("button")
                const tksBanner = document.createTextNode("Mari Kita Menghias")
                bannBt.appendChild(tksBanner)
                tombolBanner.appendChild(bannBt)
                tombolWadah.appendChild(tombolBanner)


                setTimeout(function(){
                    container.appendChild(tombolWadah)
                    container.style.transition = "1s"
                },5000)
    

                const tombolWadah1 = document.createElement("div")
                tombolWadah1.classList.add("tombolWadah1")
                    
                const banner = document.createElement("div")
                banner.classList.add("banner")
                
                const gbrBanner = document.createElement("img")
                gbrBanner.setAttribute("src","gambar/banner.png")
                banner.appendChild(gbrBanner)
                tombolWadah1.appendChild(banner)

            
            
            
            tombolBanner.addEventListener("click",function(){
                container.appendChild(tombolWadah1)
                tombolBanner.remove()


                const tombolBalon = document.createElement("div")
                tombolBalon.classList.add("tombolBalon")
                const balBt= document.createElement("button")
                const tksBalon = document.createTextNode("Keluarkan Balon")
                balBt.appendChild(tksBalon)
                tombolBalon.appendChild(balBt)
    
                setTimeout(function(){
                    container.appendChild(tombolBalon)
                },6000)
    

                const balon = document.createElement("div")
                balon.classList.add("isiBalon")

                const gbrBalon = document.createElement("img")
                gbrBalon.setAttribute("src","gambar/Balloon-Border.png")
                balon.appendChild(gbrBalon)


                //kumpulan balon kecil
                const kumpulanBalon = document.querySelector(".kumpulanBalon")

                const Kue = document.querySelector(".Kue")

                tombolBalon.addEventListener("click",function(){
                    container.appendChild(balon)
                    kumpulanBalon.style.display = "flex"

                    tombolBalon.remove()


                const tombolKue = document.createElement("div")
                tombolKue.classList.add("tombolKue")

                const kueBtn = document.createElement("button")
                const teksKue = document.createTextNode("Keluarkan Kue")

                kueBtn.appendChild(teksKue)
                tombolKue.appendChild(kueBtn)
              
                setTimeout(function(){
                    container.appendChild(tombolKue)
                },10000)

                const Kue = document.querySelector(".Kue")

                tombolKue.addEventListener("click",function(){
                    Kue.style.display = "flex"
                    tombolKue.remove()

                    const tiupLilin = document.createElement("div")
                    tiupLilin.classList.add("tiupLilin")

                    const btnTiup = document.createElement("button")
                    const teksTiup = document.createTextNode("Tiup Lilin")
                    btnTiup.appendChild(teksTiup)

                    tiupLilin.appendChild(btnTiup)

                    setTimeout(function(){
                        container.appendChild(tiupLilin)
                    },10000)

                    const flame = document.querySelector(".flame")
                    const vap = document.querySelector(".vap")

                    tiupLilin.addEventListener("click",function(){

                     setTimeout(function(){
                         flame.style.display = "none"
                         vap.style.display = "flex"
                     },500)   

                        tiupLilin.remove()

                        const nama = document.querySelector(".nama");
                        const namaVal = nama.value;
                        const par = document.createElement("p")
                        const teksPesan = document.createTextNode(`Selamat ulang tahun buat ${nama.value} 🥳🥳🥳 semoga sukses terus,tercapai lah tergetnya dan naik terus insensitifnya hahaha.Tetap kuat ya nak q 
                        `)
                        par.appendChild(teksPesan)


                        const par2 = document.createElement("p")
                        const teksPesan2 = document.createTextNode(`Saya tidak tahu nama anda karena tadi anda tidak memasukan nama.Tapi saya mengucapkan selamat ulang tahun 🥳🥳 semoga anda bisa mengingat kembali untuk mengisi nama terlebih dahulu sebelum memasuki pesta`)
                        par2.appendChild(teksPesan2)
                        
                        
                        if(namaVal === ""){
                            isiSurat.appendChild(par2)
                        }else{
                            isiSurat.appendChild(par)
                        }
                        
                        const tombolKartu = document.createElement("div")
                        tombolKartu.classList.add("tombolKartu")

                        const btnKartu = document.createElement("button")
                        const teksKartu = document.createTextNode("Dapatkan Kartu Ucapan")
                        btnKartu.appendChild(teksKartu)
                        
                        tombolKartu.appendChild(btnKartu)
                        
                        setTimeout(function(){
                            container.appendChild(tombolKartu)
                        },2000)

                        const kartuUcapan = document.querySelector(".kartuUcapan")

                        const bukaSurat = document.createElement("div")
                        bukaSurat.classList.add("bukaSurat")

                        const btnSurat = document.createElement("button")
                        const teksSurat = document.createTextNode("Buka Surat")

                        btnSurat.appendChild(teksSurat)

                        bukaSurat.appendChild(btnSurat)

                        
                        tombolKartu.addEventListener("click",function(){
                            Kue.classList.add("kue2")
                            tombolKartu.remove()
                            kartuUcapan.style.display = "flex"
                            
                            kartuUcapan.addEventListener("click",function(){
                                kartuUcapan.classList.toggle("kartuUcapan2")                                
                            })
                            
                            
                            setTimeout(function(){
                                container.appendChild(bukaSurat)
                            },5000)


                            const penutup = document.querySelector(".penutup")

                            bukaSurat.addEventListener("click",function(){
                                kartuUcapan.classList.add("kartuUcapan2")
                                bukaSurat.remove()

                                const penutupAkhir = document.createElement("div")
                                penutupAkhir.classList.add("penutupAkhir")

                                const btnSurat = document.createElement("button")
                                const teksSurat = document.createTextNode("Penutup")

                                btnSurat.appendChild(teksSurat)
                                penutupAkhir.appendChild(btnSurat)


                                setTimeout(function(){
                                container.appendChild(penutupAkhir)
                            },5000)
                              
                            
                            const teksPenutup = document.querySelector(".teksPenutup")
                            const penutupTeks = document.createElement("p")
                            const penutupPesan = document.createTextNode(`"Happy Birthday Buat anak ku Petrice Wardhana Parapat yang ke 26 Tahun.Bertambah Usiamu bertambah pula berkat mu biar bisa beli laptop Adikmu.Tuhan memberkati Amin"`)
                            const byP = document.createElement("p")
                            const byPesan = document.createTextNode("-Mamak")
                            byP.appendChild(byPesan)

                            
                            const penutupTeks2 = document.createElement("p")
                            const penutupPesan2 = document.createTextNode(`Sekali lagi saya Ucapkan Selamat Ulang Tahun untuk anda siapapun itu 🥳.Semoga kedepannya anda jadi lebih baik dalam menjalani hidup.`)

        
                            penutupAkhir.addEventListener("click",function(){
                                if(namaVal === ""){
                                    penutupTeks2.appendChild(penutupPesan2)
                                    teksPenutup.appendChild(penutupTeks2)
                                }
                                else{
                                    penutupTeks.appendChild(penutupPesan)
                                    penutupTeks.appendChild(byP)
                                    teksPenutup.appendChild(penutupTeks)
                                }

                                    kartuUcapan.style.display = "none"
                                    gbrBalon.style.display = "none"
                                    banner.style.display = "none"
                                    bukaSurat.style.display = "none"
                                    kumpulanBalon.style.display = "none"
                                    penutup.style.display = "flex"
                                    penutupAkhir.remove()
                                })
                            })

                        })


                    })

                })
                    

                })

            })
                
            })

        })

    })