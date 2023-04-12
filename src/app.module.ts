import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { BullModule } from '@nestjs/bull';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import {PrismaService} from "./prisma/prisma.service";
import {AssetsResolver} from "./assets/assets.resolver";
import {AssetsService} from "./assets/assets.service";
import {FundsResolver} from "./funds/funds.resolver";
import {FundsService} from "./funds/funds.service";
import {InstrumentsResolver} from "./instruments/instruments.resolver";
import {InstrumentsService} from "./instruments/instruments.service";
import {RegionsResolver} from "./regions/regions.resolver";
import {RegionsService} from "./regions/regions.service";
import {ReturnsResolver} from "./returns/returns.resolver";
import {ReturnsService} from "./returns/returns.service";
import {HfriconstituentsResolver} from "./hfriconstituents/hfriconstituents.resolver";
import {HfriconstituentsService} from "./hfriconstituents/hfriconstituents.service";
import {HfrxconstituentsResolver} from "./hfrxconstituents/hfrxconstituents.resolver";
import {HfrxconstituentsService} from "./hfrxconstituents/hfrxconstituents.service";
import { DailyhfrxperformanceModule } from './dailyhfrxperformance/dailyhfrxperformance.module';
import { DailyindexperformanceModule } from './dailyindexperformance/dailyindexperformance.module';
import { DatesModule } from './dates/dates.module';
import { FeaturesModule } from './features/features.module';
import { Hfrifofsince2007Module } from './hfrifofsince2007/hfrifofsince2007.module';
import { Hfrifwcsince2007Module } from './hfrifwcsince2007/hfrifwcsince2007.module';
import { HfrindiceshfraModule } from './hfrindiceshfra/hfrindiceshfra.module';
import { HfrindiceshfradailyModule } from './hfrindiceshfradaily/hfrindiceshfradaily.module';
import { HfrindiceshfrbModule } from './hfrindiceshfrb/hfrindiceshfrb.module';
import { HfrindiceshfriModule } from './hfrindiceshfri/hfrindiceshfri.module';
import { HfrindiceshfriinstModule } from './hfrindiceshfriinst/hfrindiceshfriinst.module';
import { HfrindiceshfrivolsModule } from './hfrindiceshfrivols/hfrindiceshfrivols.module';
import { Hfrindiceshfri500Module } from './hfrindiceshfri500/hfrindiceshfri500.module';
import { HfrindiceshfriiModule } from './hfrindiceshfrii/hfrindiceshfrii.module';
import { HfrindiceshfriidailyModule } from './hfrindiceshfriidaily/hfrindiceshfriidaily.module';
import { HfrindiceshfrpModule } from './hfrindiceshfrp/hfrindiceshfrp.module';
import { HfrindiceshfrrModule } from './hfrindiceshfrr/hfrindiceshfrr.module';
import { HfrindiceshfrrdailyModule } from './hfrindiceshfrrdaily/hfrindiceshfrrdaily.module';
import { HfrindiceshfruModule } from './hfrindiceshfru/hfrindiceshfru.module';
import { HfrindiceshfrudailyModule } from './hfrindiceshfrudaily/hfrindiceshfrudaily.module';
import { HfrindiceshfrudailytestModule } from './hfrindiceshfrudailytest/hfrindiceshfrudailytest.module';
import { HfrindiceshfrxModule } from './hfrindiceshfrx/hfrindiceshfrx.module';
import { HfrindiceshfrxdailyModule } from './hfrindiceshfrxdaily/hfrindiceshfrxdaily.module';
import { LkgroupModule } from './lkgroup/lkgroup.module';
import { LkuserdocModule } from './lkuserdoc/lkuserdoc.module';
import { TrakkernavModule } from './trakkernav/trakkernav.module';
import { NdxmgrnavModule } from './ndxmgrnav/ndxmgrnav.module';
import { NdxwgnavModule } from './ndxwgnav/ndxwgnav.module';
import { PrfdstgrossModule } from './prfdstgross/prfdstgross.module';
import { RmsiteconfigModule } from './rmsiteconfig/rmsiteconfig.module';
import { TrakkerrorModule } from './trakkerror/trakkerror.module';
import { SeopageModule } from './seopage/seopage.module';
import { UserlogintrackingModule } from './userlogintracking/userlogintracking.module';
import { UsersModule } from './users/users.module';
import { WebhfrindicesModule } from './webhfrindices/webhfrindices.module';
import { WebtemplatesModule } from './webtemplates/webtemplates.module';


@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            debug: false,
            playground: false,
            typePaths: ['./**/*.graphql'],
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
        BullModule.forRoot({
            redis: {
                host: 'localhost',
                port: 6379,
            },
        }),
        AuthModule,
        DailyhfrxperformanceModule,
        DailyindexperformanceModule,
        DatesModule,
        FeaturesModule,
        Hfrifofsince2007Module,
        Hfrifwcsince2007Module,
        HfrindiceshfraModule,
        HfrindiceshfradailyModule,
        HfrindiceshfrbModule,
        HfrindiceshfriModule,
        HfrindiceshfriinstModule,
        HfrindiceshfrivolsModule,
        Hfrindiceshfri500Module,
        HfrindiceshfriiModule,
        HfrindiceshfriidailyModule,
        HfrindiceshfrpModule,
        HfrindiceshfrrModule,
        HfrindiceshfrrdailyModule,
        HfrindiceshfruModule,
        HfrindiceshfrudailyModule,
        HfrindiceshfrudailytestModule,
        HfrindiceshfrxModule,
        HfrindiceshfrxdailyModule,
        LkgroupModule,
        LkuserdocModule,
        TrakkernavModule,
        NdxmgrnavModule,
        NdxwgnavModule,
        PrfdstgrossModule,
        RmsiteconfigModule,
        TrakkerrorModule,
        SeopageModule,
        UserlogintrackingModule,
        UsersModule,
        WebhfrindicesModule,
        WebtemplatesModule
    ],
    controllers: [AppController],
    providers: [
        AppService, AuthService, PrismaService,
        FundsResolver, FundsService,
        AssetsResolver, AssetsService,
        InstrumentsResolver, InstrumentsService,
        RegionsResolver, RegionsService,
        ReturnsResolver, ReturnsService,
        HfriconstituentsResolver, HfriconstituentsService,
        HfrxconstituentsResolver, HfrxconstituentsService,
    ],
})
export class AppModule {}
