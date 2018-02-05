import Vue, {PluginFunction, PluginObject} from 'vue';
import {FrisbeeInstance} from 'frisbee';

declare module 'vue/types/vue' {

  interface Vue {
    frisbee: FrisbeeInstance;
    $http: FrisbeeInstance;
  }

  namespace Vue {
    const frisbee: FrisbeeInstance;
  }

}

declare class VueFrisbee {
  static install: PluginFunction<FrisbeeInstance>;
}

export = VueFrisbee;
