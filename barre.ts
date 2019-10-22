// Ajouter votre code ici
let x = 70;
let y = 115;


input.onButtonPressed(Button.AB, function () {
    LCD1IN8.DrawRectangle(x, y, x + 20, y + 5, 64512, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.LCD_DisplayWindows(x - 1, y - 1, x + 20, y + 4)
})
input.onButtonPressed(Button.A, function () {
    LCD1IN8.DrawRectangle(x, y, x + 20, y + 5, LCD_COLOR.WHITE, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
    x -= 2
    LCD1IN8.DrawRectangle(x, y, x + 20, y + 5, 64512, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.LCD_DisplayWindows(x - 1, y - 1, x + 22, y + 4)
})

input.onButtonPressed(Button.B, function () {
    LCD1IN8.DrawRectangle(x, y, x + 20, y + 5, LCD_COLOR.WHITE, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
    x += 2
    LCD1IN8.DrawRectangle(x, y, x + 20, y + 5, 64512, DRAW_FILL.DRAW_FULL, DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.LCD_DisplayWindows(x - 3, y - 1, x + 20, y + 4)
})