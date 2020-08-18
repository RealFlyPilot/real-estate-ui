const getHexValueAtLocation = (value, start, count) => {
  return parseInt(value.substring(start, count), 16)
}

const isValidHex = (hex) => /(^[0-9a-fA-F]{6}$)|(^[0-9a-fA-F]{3}$)/.test(hex)

export const hexToRGB = (hex: string) => {
  if (!hex) {
    return
  }

  hex = hex.replace('#', '')
  if (!isValidHex(hex)) {
    return
  }

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const hexToR = (hex) => getHexValueAtLocation(hex, 0, 2)
  const hexToG = (hex) => getHexValueAtLocation(hex, 2, 4)
  const hexToB = (hex) => getHexValueAtLocation(hex, 4, 6)

  return `${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)}`
}

export const hexToRGBA = (hex, transparency = 1) => {
  if (!hex) return

  const toRgb = hexToRGB(hex)

  return `rgba(${toRgb}, ${transparency})`
}

export const convertRemsToPixels = (rem) => {
  if (typeof rem === 'string') {
    console.log('rem.replace', rem.replace(/[^\d.-]/g, ''))
    console.log(parseFloat(rem.replace(/[^\d.-]/g, '')) * 16)
    return parseFloat(rem.replace(/[^\d.-]/g, '')) * 16
  }

  return parseFloat(rem) * 16
}

export const convertPixelsToRem = (pixels) => {
  if (typeof pixels === 'string') {
    return parseFloat(pixels.replace(/[^\d.-]/g, '')) / 16
  }

  return parseFloat(pixels) / 16
}
