interface Image {
    //% helper=imageIsHavingDataSheet 
    //% blockId=image_contains_data_sheet block="%picture=variables_get(picture) contains data sheet"
    /**
     * checks if the sprite has a color without only transparency data
     */
    containsDataSheet(): boolean
}

namespace helpers {
    export function imageIsHavingDataSheet(image: Image): boolean {
       for (let y = 0; y < image.height; y++) {
       for (let x = 0; x < image.width; x++) {
           // color 0x0 is transparency
           if (
               image.getPixel(x, y) === 0x1 ||
               image.getPixel(x, y) === 0x2 ||
               image.getPixel(x, y) === 0x3 ||
               image.getPixel(x, y) === 0x4 ||
               image.getPixel(x, y) === 0x5 ||
               image.getPixel(x, y) === 0x6 ||
               image.getPixel(x, y) === 0x7 ||
               image.getPixel(x, y) === 0x8 ||
               image.getPixel(x, y) === 0x9 ||
               image.getPixel(x, y) === 0xa ||
               image.getPixel(x, y) === 0xb ||
               image.getPixel(x, y) === 0xc ||
               image.getPixel(x, y) === 0xd ||
               image.getPixel(x, y) === 0xe ||
               image.getPixel(x, y) === 0xf
           ) return true
       }
    }

       return false
    } 
}

