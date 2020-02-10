import React, { useState, useEffect } from 'react'
import { AreaType } from '../utils/types';
import style from './Area.module.scss'
const Area = (props: { areaTree: AreaType[] }) => {
    console.log("=========>", props.areaTree)
    return <>
        <div className={style.clearfix}>

            <div className={style.up_tips}>
            <span className={style.gnbl}></span>
            中国疫情（包括港澳台）
            <span className={style.tips}>7:00-10:00为更新高峰，数据如有滞后请谅解。</span>
            </div>

            <div className={style.abroad}>
                <div className={style.placeItem}>
                    <h2>地区</h2>
                    <div>新增确诊</div>
                    <div>累计确诊</div>
                    <div>治愈</div>
                    <div>死亡</div>
                    <div>病死率</div>
                </div>
                <div>
                    {
                        props.areaTree && props.areaTree.map((item, index) => {
                            return (
                                <div className={style.placeItem} key={index}>
                                    <h2>{item.name}</h2>
                                    <div>{item.today.confirm}</div>
                                    <div>{item.total.confirm}</div>
                                    <div>{item.total.heal}</div>
                                    <div>{item.total.dead}</div>
                                    <div>{item.total.dead / item.total.confirm * 100}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    </>
}


export default Area
