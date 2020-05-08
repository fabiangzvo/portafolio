/**
 * @function typingEffect
 * get all items with the querySelector api and setter all texts 
 * received how parameter in this function, every position in the 
 * array represents a item in the result of the query selector
 * 
 * @param {string} selector selector css which get all items to set texts
 * @param {Array} texts string to set into of the items getted of the selector
 */
export const typingEffect = async (selector, texts) => {
  try {
    const elements = document.querySelectorAll(selector)

    await createEffect(elements, texts)

    await new Promise(resolve => setTimeout(resolve, 1000))
    document.getElementsByClassName('vscode')[0].style.display = 'none'
    document.getElementsByClassName('terminal')[0].style.display = 'block'
    const ele = document.querySelectorAll('.terminal-effect')

    await createEffect(ele, ['node&', 'index.js', '...'])
    await new Promise(resolve => setTimeout(resolve, 1000))
    document.getElementsByClassName('bash')[0].style.visibility = 'hidden'
    return true
  } catch (e) {
    return false
  }
}

const createEffect = async (elements = [], texts = []) => new Promise(async (resolve, reject) => {
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < texts[i].length; j++) {
      if (j < texts[i].length) {
        if (texts[i].charAt(j) === '&') {
          elements[i].innerHTML += '&ensp;'
          break
        }
        elements[i].innerHTML += texts[i].charAt(j)
        elements[i].innerHTML += '|'
        await new Promise(resolve => setTimeout(resolve, 70))
        elements[i].innerHTML = elements[i].innerHTML.slice(0, -1)
      }
    }
  }
  resolve()
  reject()
})