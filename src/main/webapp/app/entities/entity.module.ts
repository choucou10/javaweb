import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JavawebBlogModule } from './blog/blog.module';
import { JavawebTagModule } from './tag/tag.module';
import { JavawebEntryModule } from './entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JavawebBlogModule,
        JavawebTagModule,
        JavawebEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JavawebEntityModule {}
