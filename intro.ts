function intro() {
    displayDialogue(0, 50, "Coucou tout le monde ! C'est une petite phrase d'intro mais on va faire mieu après, vous inquiétez pas...", 0, 0)
}

LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
displayDialogue(0, 0, "Test", 0, 0)