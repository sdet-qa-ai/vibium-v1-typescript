import { browser, browserSync } from 'vibium'


describe('This is my first vibium test',async function(){
    it('first vibium broswer interaction ',async function(){
        const vibe =  browserSync.launch({headless:false})
        vibe.go("https://www.saucedemo.com/")
        const attribute=vibe.find("input#user-name").getAttribute("class")
        console.log('***********ATTRIBUTE************')
        console.log(attribute)
        console.log('***********************')

        const info_data=vibe.find("input#user-name").info
        console.log('************INFO***********')
        console.log(info_data)
        console.log('***********************')

        const text_data=vibe.find("input#user-name").text()
        console.log('************TEXT***********')
        console.log(text_data)
        console.log('***********************')
       vibe.find("input#user-name").type("SDET AI")
       const title = vibe.evaluate<string>("return document.title")
       console.log('************TITLE***********')
       console.log(title)
       console.log('***********************')
       vibe.quit()
       
     
    })

   
})