// Copyright 2024 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Routing module for new lesson player page.
 */

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewLessonPlayerPageRootComponent } from './lesson-player-page-root.component';

const routes: Route[] = [
  {
    path: '',
    component: NewLessonPlayerPageRootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class NewLessonPlayerPageRoutingModule {}
