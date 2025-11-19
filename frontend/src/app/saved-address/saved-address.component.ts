/*
 * Copyright (c) 2014-2026 UserE Kimminich & the Security Project Vulnerable App contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component } from '@angular/core'
import { AddressComponent } from '../address/address.component'

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.scss'],
  imports: [AddressComponent]
})

export class SavedAddressComponent {
}
