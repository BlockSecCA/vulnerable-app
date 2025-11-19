/*
 * Copyright (c) 2014-2026 UserE Kimminich & the Security Project Vulnerable App contributors.
 * SPDX-License-Identifier: MIT
 */

import { inject, TestBed } from '@angular/core/testing'

import { WindowRefService } from './window-ref.service'

describe('WindowRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowRefService]
    })
  })

  it('should be created', inject([WindowRefService], (service: WindowRefService) => {
    expect(service).toBeTruthy()
  }))
})
