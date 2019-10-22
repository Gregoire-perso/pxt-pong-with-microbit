basic.pause(5000)

LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()

let largeur_barre = 25 - 1; //La largeur effective de la barre est ici 25
let x = 70;
let y = 115;

input.onButtonPressed(Button.AB, function () {
    LCD1IN8.DrawRectangle(x, y, x + largeur_barre, y + 5, 64512, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.LCD_DisplayWindows(x - 1, y - 1, x + largeur_barre, y + 4)
})

while (true) {
    while (input.buttonIsPressed(Button.A) && x >= 2) {
        LCD1IN8.DrawRectangle(x, y, x + largeur_barre, y + 5, LCD_COLOR.WHITE, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
        x -= 1
        LCD1IN8.DrawRectangle(x, y, x + largeur_barre, y + 5, 64512, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
        LCD1IN8.LCD_DisplayWindows(x - 1, y - 1, x + largeur_barre + 2, y + 4)
    }

    while (input.buttonIsPressed(Button.B) && (x + largeur_barre < 160)) {
        LCD1IN8.DrawRectangle(x, y, x + largeur_barre, y + 5, LCD_COLOR.WHITE, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
        x += 1
        LCD1IN8.DrawRectangle(x, y, x + largeur_barre, y + 5, 64512, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
        LCD1IN8.LCD_DisplayWindows(x - 3, y - 1, x + largeur_barre, y + 4)
    }
}