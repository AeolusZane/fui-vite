/*
 * @Author: Aeolus.Zhang-张敬峥 Aeolus.Zhang@fanruan.com
 * @Date: 2022-09-20 15:31:01
 * @LastEditors: Aeolus.Zhang-张敬峥 Aeolus.Zhang@fanruan.com
 * @LastEditTime: 2022-09-22 15:03:23
 * @FilePath: /fineops-webui/types/globals.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface Obj {
    [key: string]: any;
}

declare type AppendProps<T, K> = {
    [key in keyof (T & K)]: key extends keyof K ?
    K[key] : key extends keyof T ? T[key] : never;
};

declare let BI: import("@fui/core").BI & {
    FormulaJSONs: {
        def: string;
        name: string;
        type: string;
    }[];
    FormulaCollections: string[];
} & import("@fui/materials").BI &
    Obj;

declare const Fix: Obj;
declare let Dec: Obj;
declare let DecCst: Obj;

/**
 * 有空一个个补充，这个提示框还是经常在用
 */
declare const Ops: Obj & {
    Msg: {

        /**
         * 无杂质提示框
         */
        customConfirm: (option: {
            title?: string | '提示',
            size?: 'small' | 'normal' | 'large',
            message?: string,
            callback?: Function,
        }) => void;
        [key: string]: any;

        /**
         * 带错误详情的提示弹窗
         * @param {*} msg 提示信息
         * @param {*} info 错误详情
         */
        ErrorAlertWithInfo: (msg: string, info: string, callback?: Function) => void;

        /**
         * 顶部通知提示
         */
        toastSuccess: (msg: string) => void;

        /**
         * loadding，返回关闭loading的回调
         */
        createLoading: (msg: string) => () => void;
    }
};
