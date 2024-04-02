import type { InjectionKey } from 'vue'
import { inject } from 'vue'

export const githubUrlKey: InjectionKey<string> = Symbol('github')

export const getGithubUrl = ():string => {
   return inject<string>(githubUrlKey, "#")
}
