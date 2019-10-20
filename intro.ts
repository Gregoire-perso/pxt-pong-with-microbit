function intro() {
    let a = "Coucou les gens ! C'est un test d'intro parce qu'en vrai on en fera une mieux mais c'est pas mon domaine, celui de Max"
    LCD1IN8.DisString(0, 0, a, 0)
    LCD1IN8.LCD_Display()
    //LCD1IN8.LCD_DisplayWindows(0, 0, a.length * 7 + 20, 20)
}