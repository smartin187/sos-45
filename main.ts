let masage_recu = 0
let répété_indéfinimen = 0
let ch = 0
let m1 = 0
let m2 = 0
let m3 = 0
let radio_filere = 0
let mésage_resu_sur_la_radio_ou_p1 = 0
let _1 = 0
let _2 = 0
let _3 = 0
let _4 = 0
let t1 = 0
let liste_des_aplication = 0
function météo () {
    basic.showLeds(`
        # . . . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.pause(100)
    basic.showString("météo")
    basic.pause(200)
    basic.showString("température :")
    basic.showNumber(input.temperature())
    basic.pause(100)
    basic.showString("% de luminesiter :")
    basic.showNumber(input.lightLevel())
    basic.pause(100)
    if (input.lightLevel() < 10) {
        basic.showString("nuageu")
    } else {
        basic.showString("lumineu")
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showString("pour redémarer le diagnostique : A")
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        masage_recu = 1
    }
    if (2 == receivedNumber) {
        masage_recu = 1
    }
    if (3 == receivedNumber) {
        masage_recu = 1
    }
})
function torau_video () {
    music.playMelody("C5 - - - - - - - ", 120)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        # # # # .
        # . # # .
        . # # # #
        # . . . #
        `)
    for (let index = 0; index < répété_indéfinimen; index++) {
        if (input.buttonIsPressed(Button.A)) {
            music.playMelody("C5 - - - - - - - ", 120)
            basic.showString("slim M")
            basic.showLeds(`
                . . . . .
                . # . # .
                . # # # .
                . . # . .
                . . . . .
                `)
            music.playMelody("D G C G F G D C5 ", 120)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . # # . .
                . # # . .
                # # # # #
                # # # # #
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                # # . . .
                # # . . .
                # # . . #
                # # . . #
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . # # .
                . . # # .
                . . . . .
                # # . . #
                # # . . #
                `)
            music.playMelody("F - - - - - - - ", 120)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . #
                # # . . #
                # # . . #
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . . # .
                . . # # #
                # . . # .
                # . # . #
                # # # # #
                `)
            music.playMelody("C5 B C A C5 D F - ", 120)
            basic.pause(1000)
            basic.showLeds(`
                # . . # .
                . # # # #
                . . . # .
                # # # . #
                # # # # #
                `)
            basic.pause(1000)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # # #
                . # . # .
                # # # # #
                `)
        }
        if (input.buttonIsPressed(Button.B)) {
            music.playMelody("C5 - - - - - - - ", 120)
            basic.showString("4x4 montagne")
            basic.showLeds(`
                . . . . .
                # # # . .
                # # # # .
                # . . # .
                # # # # #
                `)
            music.playMelody("C5 G C G E C5 G C ", 120)
            basic.pause(1000)
            basic.showLeds(`
                # # # . .
                # # # # .
                # . . # #
                # # . # #
                # # # # #
                `)
            basic.pause(1000)
            basic.showLeds(`
                # # # . #
                # # # # #
                # . . # #
                # . . # #
                # # # # #
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . # # #
                . # # . #
                . # # . #
                . # # . #
                . # # # #
                `)
            music.playMelody("C5 B - - G - C5 B ", 120)
            basic.pause(1000)
            basic.showLeds(`
                # # . . .
                . # . . .
                # # . . .
                # # . . #
                # # . . #
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                # . . . .
                # # . . .
                . # . . .
                # # . . .
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # #
                . # . . #
                # # . . .
                `)
            basic.pause(1000)
            music.playMelody("C5 A F D C - C - ", 120)
            basic.showLeds(`
                . # # # .
                . . # # .
                . . # # .
                . . # # .
                . # # . .
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . # # .
                . # # # .
                # . # . .
                # # # # #
                `)
        }
    }
}
function pile_ou_fase () {
    for (let index = 0; index < répété_indéfinimen; index++) {
        basic.showString("appuier sur A")
        if (input.buttonIsPressed(Button.A)) {
            ch = randint(0, 1)
            if (ch == 0) {
                basic.showLeds(`
                    . # # # .
                    # . . . #
                    # . . . #
                    # . . . #
                    . # # # .
                    `)
                basic.pause(1000)
                basic.clearScreen()
            } else if (ch == 1) {
                basic.showLeds(`
                    . . . # .
                    . . # # .
                    . . . # .
                    . . . # .
                    . . . # .
                    `)
                basic.pause(1000)
                basic.clearScreen()
            }
        }
    }
}
function carte () {
    basic.showLeds(`
        # # # # #
        # . . # #
        # # # . #
        # . . # #
        # # # # #
        `)
    basic.pause(200)
    for (let index = 0; index < répété_indéfinimen; index++) {
        basic.showString("carte")
        basic.showLeds(`
            . # . . #
            # . # # .
            . # # # #
            . # # # #
            # . # # #
            `)
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.pause(200)
            basic.showString("bousole")
            for (let index = 0; index < répété_indéfinimen; index++) {
                basic.showArrow(ArrowNames.North)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                # # # # #
                # # . . #
                # . # # #
                # . # . #
                # # # # #
                `)
            basic.pause(200)
            basic.showLeds(`
                . # # . #
                # # # # #
                . # # # #
                # # # # #
                # # . . #
                `)
            if (input.buttonIsPressed(Button.A)) {
                basic.showLeds(`
                    . . # # .
                    . # . # #
                    . . . . #
                    . . # . .
                    . . # # .
                    `)
            }
        }
    }
}
function mésage () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # . . . #
        . # . # #
        . . # # #
        `)
    basic.pause(200)
    basic.showString("mésage")
    basic.showLeds(`
        . # . . #
        # # # # .
        . # # # .
        . # # # #
        # . . # .
        `)
    for (let index = 0; index < répété_indéfinimen; index++) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("anvoyer un mesage")
            while (0 == m1) {
                if (input.buttonIsPressed(Button.A)) {
                    m1 = 1
                }
                if (input.buttonIsPressed(Button.B)) {
                    m1 = 2
                }
                if (input.buttonIsPressed(Button.AB)) {
                    m1 = 3
                }
            }
            if (m1 == 1) {
                basic.showString("a")
            }
            if (m1 == 2) {
                basic.showString("b")
            }
            if (m1 == 3) {
                basic.showString("c")
            }
            basic.pause(1000)
            while (0 == m2) {
                if (input.buttonIsPressed(Button.A)) {
                    m2 = 1
                }
                if (input.buttonIsPressed(Button.B)) {
                    m2 = 2
                }
                if (input.buttonIsPressed(Button.AB)) {
                    m2 = 3
                }
            }
            if (1 == m2) {
                basic.showString("a")
            }
            if (2 == m2) {
                basic.showString("b")
            }
            if (3 == m2) {
                basic.showString("c")
            }
            while (0 == m3) {
                if (input.buttonIsPressed(Button.A)) {
                    m3 = 1
                }
                if (input.buttonIsPressed(Button.B)) {
                    m3 = 2
                }
                if (input.buttonIsPressed(Button.AB)) {
                    m3 = 3
                }
            }
            if (1 == m3) {
                basic.showString("a")
            }
            if (2 == m3) {
                basic.showString("b")
            }
            if (3 == m3) {
                basic.showString("c")
            }
            basic.pause(1000)
            basic.showLeds(`
                . . # # #
                . . . # #
                . . # . #
                # # . . .
                # # . . .
                `)
            basic.pause(100)
            basic.showString("envoiyer le message")
            basic.showLeds(`
                . # . . #
                # . # # .
                . # # . #
                . # . # .
                # . # . #
                `)
            while (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                if (input.buttonIsPressed(Button.A)) {
                    basic.showLeds(`
                        . . . . .
                        # . . . .
                        . # . . .
                        . . # . #
                        . . . # .
                        `)
                }
                if (input.buttonIsPressed(Button.B)) {
                    m1 = 0
                    m2 = 0
                    m3 = 0
                    basic.showLeds(`
                        # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
                        `)
                }
            }
            basic.pause(100)
            basic.showString("radio ou filére")
            basic.showLeds(`
                . . # . #
                # # . # .
                # # # # #
                . # . . #
                # . . . #
                `)
            while (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                if (input.buttonIsPressed(Button.A)) {
                    radio_filere = 0
                }
                if (input.buttonIsPressed(Button.B)) {
                    radio_filere = 1
                }
            }
            if (0 == radio_filere) {
                radio.sendNumber(m1)
                basic.pause(100)
                radio.sendNumber(m2)
                basic.pause(100)
                radio.sendNumber(m3)
                basic.showString("terminé!")
            }
            if (1 == radio_filere) {
                pins.analogWritePin(AnalogPin.P0, m1)
                basic.pause(100)
                pins.analogWritePin(AnalogPin.P0, m2)
                basic.pause(100)
                pins.analogWritePin(AnalogPin.P0, m3)
                basic.showString("terminé!")
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("mésage resu sur la radio ou p1")
            basic.showLeds(`
                . . # . #
                # # . # .
                # # # # #
                . # . . #
                # . . . #
                `)
            while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                if (input.buttonIsPressed(Button.A)) {
                    mésage_resu_sur_la_radio_ou_p1 = 0
                }
                if (input.buttonIsPressed(Button.B)) {
                    mésage_resu_sur_la_radio_ou_p1 = 1
                }
                if (0 == mésage_resu_sur_la_radio_ou_p1) {
                    for (let index = 0; index < répété_indéfinimen; index++) {
                        if (1 == masage_recu) {
                            basic.showString("a")
                        }
                        if (2 == masage_recu) {
                            basic.showString("b")
                        }
                        if (3 == masage_recu) {
                            basic.showString("c")
                        }
                    }
                }
                if (1 == mésage_resu_sur_la_radio_ou_p1) {
                    for (let index = 0; index < répété_indéfinimen; index++) {
                        if (1 == pins.analogReadPin(AnalogPin.P1)) {
                            basic.showString("a")
                        }
                        if (2 == pins.analogReadPin(AnalogPin.P1)) {
                            basic.showString("b")
                        }
                        if (3 == pins.analogReadPin(AnalogPin.P1)) {
                            basic.showString("c")
                        }
                    }
                }
            }
        }
    }
}
function fotovideo () {
    music.playMelody("C5 - - - - - - - ", 120)
    for (let index = 0; index < répété_indéfinimen; index++) {
        if (input.buttonIsPressed(Button.A)) {
            music.playMelody("C5 - - - - - - - ", 120)
            for (let index = 0; index < répété_indéfinimen; index++) {
                if (input.lightLevel() < 128) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                } else {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                }
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            music.playMelody("- - - - - - - - ", 120)
            for (let index = 0; index < répété_indéfinimen; index++) {
                if (input.buttonIsPressed(Button.A)) {
                    if (input.lightLevel() < 128) {
                        _1 = 0
                    }
                    if (input.lightLevel() > 128) {
                        _1 += 1
                    }
                    basic.pause(1000)
                    if (input.lightLevel() < 128) {
                        _2 = 0
                    }
                    if (input.lightLevel() < 128) {
                        _2 = 1
                    }
                    basic.pause(1000)
                    if (input.lightLevel() < 128) {
                        _3 = 0
                    }
                    if (input.lightLevel() < 128) {
                        _3 = 1
                    }
                    basic.pause(1000)
                    if (input.lightLevel() < 128) {
                        _4 = 0
                    }
                    if (input.lightLevel() < 128) {
                        _4 = 1
                    }
                }
                if (input.buttonIsPressed(Button.B)) {
                    if (_1 == 1) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    }
                    if (_1 == 0) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                    basic.pause(1000)
                    if (_2 == 1) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    }
                    if (_2 == 0) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                    basic.pause(1000)
                    if (_3 == 1) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    }
                    if (_3 == 0) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                    basic.pause(1000)
                    if (_4 == 1) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    }
                    if (_4 == 0) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                }
            }
        }
    }
}
function texte () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # #
        . # . # #
        . # . # #
        `)
    basic.pause(200)
    basic.showString("texte")
    for (let index = 0; index < répété_indéfinimen; index++) {
        if (input.buttonIsPressed(Button.A)) {
            t1 = 1
        }
        if (input.buttonIsPressed(Button.B)) {
            t1 = 2
        }
        if (input.buttonIsPressed(Button.AB)) {
            t1 = 3
        }
        if (t1 == 1) {
            basic.showString("a")
        }
        if (t1 == 2) {
            basic.showString("b")
        }
        if (t1 == 3) {
            basic.showString("c")
        }
    }
}
basic.forever(function () {
    if (50 < input.temperature()) {
        basic.showLeds(`
            # . # . #
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            `)
        basic.pause(200)
        basic.showString("température trop élevé : arété votre micro bit")
    }
})
basic.forever(function () {
    répété_indéfinimen = 999
    basic.showString("SOS v4,5")
    music.playMelody("C F C5 - - - - - ", 120)
    basic.pause(100)
    basic.showString("menu : A+B")
    for (let index = 0; index < répété_indéfinimen; index++) {
        basic.showLeds(`
            # # . . #
            # # # # .
            . . # . .
            . # # # .
            # . # # #
            `)
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # # . . .
                # # # # .
                # # . # .
                # # # # .
                . . . . .
                `)
            basic.pause(1000)
            for (let index = 0; index < répété_indéfinimen; index++) {
                basic.showLeds(`
                    # # . . #
                    # # # # .
                    . . # # #
                    . # . # #
                    # . . # .
                    `)
                if (input.buttonIsPressed(Button.A)) {
                    basic.showLeds(`
                        # # . . .
                        # # # # .
                        # # . # .
                        # # # # .
                        . . . . .
                        `)
                    basic.pause(1000)
                    basic.showLeds(`
                        # . # . #
                        # # # # .
                        . # # # #
                        . # . # .
                        # . . # .
                        `)
                    for (let index = 0; index < répété_indéfinimen; index++) {
                        if (input.buttonIsPressed(Button.A)) {
                            torau_video()
                        }
                        if (input.buttonIsPressed(Button.B)) {
                            texte()
                        }
                    }
                }
                if (input.buttonIsPressed(Button.B)) {
                    pile_ou_fase()
                }
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                # # . . .
                # # # # .
                # # . # .
                # # # # .
                . . . . .
                `)
            basic.pause(1000)
            for (let index = 0; index < répété_indéfinimen; index++) {
                basic.showLeds(`
                    # # . . #
                    # # # # .
                    . . # # #
                    . # # # #
                    # . # # #
                    `)
                if (input.buttonIsPressed(Button.A)) {
                    basic.showLeds(`
                        # # . . .
                        # # # # .
                        # # . # .
                        # # # # .
                        . . . . .
                        `)
                    basic.pause(1000)
                    basic.showLeds(`
                        . # . . #
                        # # # # .
                        . . # # #
                        . # # . #
                        # . # # #
                        `)
                    for (let index = 0; index < répété_indéfinimen; index++) {
                        if (input.buttonIsPressed(Button.A)) {
                            météo()
                        }
                        if (input.buttonIsPressed(Button.B)) {
                            fotovideo()
                        }
                    }
                }
                if (input.buttonIsPressed(Button.B)) {
                    carte()
                }
            }
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # . # #
            . # . . .
            . # . # .
            . . . # #
            . . . # .
            `)
        for (let index = 0; index < répété_indéfinimen; index++) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showLeds(`
                    . # # . .
                    . . . # .
                    . . # . .
                    . . . . .
                    . . # . .
                    `)
                basic.pause(200)
                basic.showString("aide :")
                basic.showString("au démarage, fait votre code : A ajoute 1 au code B soustré 1")
                basic.showString("une foit conécté, vous aver 2 coase séparer de \"/\"")
                basic.showString("sur chaque casse, il y a soi un dossier ou une aplication")
                basic.showString("(dossier):")
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . # # . .
                    . # # # .
                    . . . . .
                    `)
                basic.pause(500)
                basic.showString("faite A ou B pour ouvrire.      dans un dissier il y aura aussi ca")
                basic.showString("il peu aissi y avoire dans une casse celecuchosse mais den l'autre rien")
            }
            if (input.buttonIsPressed(Button.B)) {
                basic.showString("liste des aplication")
                basic.showLeds(`
                    . . . # .
                    . # # # .
                    . . # # .
                    . . . # .
                    . # # # .
                    `)
                basic.pause(500)
                basic.showString("1 : tauro-video")
                liste_des_aplication = 20
                while (liste_des_aplication == 0) {
                    if (input.buttonIsPressed(Button.A)) {
                        torau_video()
                    }
                }
                basic.showString("2 : foto/video")
                liste_des_aplication = 20
                while (liste_des_aplication == 0) {
                    if (input.buttonIsPressed(Button.A)) {
                        fotovideo()
                    }
                }
                basic.showString("3 : pile ou face")
                liste_des_aplication = 20
                while (0 == liste_des_aplication) {
                    if (input.buttonIsPressed(Button.A)) {
                        pile_ou_fase()
                    }
                }
                basic.showString("4 : carte/bousole")
                liste_des_aplication = 20
                while (liste_des_aplication == 0) {
                    if (input.buttonIsPressed(Button.A)) {
                        carte()
                    }
                }
                basic.showString("5 : météo")
                liste_des_aplication = 20
                while (liste_des_aplication == 0) {
                    if (input.buttonIsPressed(Button.A)) {
                        météo()
                    }
                }
                basic.showString("6 : mesage")
                liste_des_aplication = 20
                while (liste_des_aplication == 0) {
                    if (input.buttonIsPressed(Button.A)) {
                        mésage()
                    }
                }
                basic.showString("7 : text")
                liste_des_aplication = 20
                while (liste_des_aplication == 0) {
                    if (input.buttonIsPressed(Button.A)) {
                        texte()
                    }
                }
            }
            if (input.buttonIsPressed(Button.AB)) {
                basic.showString("teste des périférique")
                basic.showLeds(`
                    . . # # .
                    . . # . .
                    . . # . #
                    . # . # .
                    . . # . .
                    `)
                basic.pause(500)
                basic.showString("1 : auparleur :")
                music.playMelody("C D E F G A B C5 ", 120)
                basic.showString("2 : température")
                basic.showNumber(input.temperature())
                basic.pause(1000)
                basic.showString("3 : luminausiter")
                basic.showNumber(input.lightLevel())
                basic.pause(1000)
                basic.showString("4 : mouveman")
                while (input.isGesture(Gesture.Shake)) {
                    basic.showString("secoué")
                }
                basic.showString("OK")
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    liste_des_aplication += -1
})
