for (let index = 0; index < 10; index++) {
    let offset = 0
    images.createImage(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `).showImage(offset)
    images.createImage(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `).showImage(offset)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(offset)
    images.createImage(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `).showImage(offset)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `).showImage(offset)
    images.createImage(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `).showImage(offset)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(offset)
    images.createImage(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `).showImage(offset)
}
basic.forever(function () {
	
})
