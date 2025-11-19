/*
 * Copyright (c) 2014-2026 UserE Kimminich & the Security Project Vulnerable App contributors.
 * SPDX-License-Identifier: MIT
 */

import path from 'node:path'
import { type Request, type Response } from 'express'
import { challenges } from '../data/datacache'
import * as challengeUtils from '../lib/challengeUtils'

export function servePremiumContent () {
  return (req: Request, res: Response) => {
    challengeUtils.solveIf(challenges.premiumPaywallChallenge, () => { return true })
    res.sendFile(path.resolve('frontend/dist/frontend/assets/private/VulnerableApp_Wallpaper_1920x1080_VR.jpg'))
  }
}
