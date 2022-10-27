import themes from '@/config/variable'
import { get } from 'lodash-es'

export type StyleVars = Record<string, string>
export type ThemeType = 'light' | 'dark'

const mountedVarKeys: string[] = []

export function setThemes(name: ThemeType) {
    const themeConfig = get(themes, name, {})
    const styleVars = Object.entries(themeConfig).reduce((styleVars, [key, value]) => {
        styleVars[`--site-config-${key}`] = value as string
        return styleVars
    }, {} as StyleVars)

    StyleProvider(styleVars)
}

function StyleProvider(styleVars: StyleVars | null = {}) {
    mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
    mountedVarKeys.length = 0

    const styles = styleVars as StyleVars
    Object.entries(styles).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value)
        mountedVarKeys.push(key)
    })
}