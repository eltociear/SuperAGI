import React from 'react';
import styles from './Agents.module.css';
import Image from "next/image";
import {formatTime} from "@/utils/utils";

export default function RunHistory({runs, setHistory, selectedRun, setSelectedRun}) {
  return (<>
    <div style={{width:'20%',height:'100%'}}>
      <div className={styles.detail_top}>
        <div style={{display:'flex'}}>
          <div style={{display:'flex',alignItems:'center',paddingLeft:'0'}} className={styles.tab_text}>
            <div>
              <Image width={16} height={16} src="/images/update.png" alt="update-icon"/>
            </div>
            <div style={{marginLeft:'7px'}}>Run history</div>
          </div>
        </div>
        <div style={{display:'flex'}}>
          <div style={{display:'flex',alignItems:'center',cursor:'pointer'}} onClick={() => setHistory(false)}>
            <Image width={16} height={16} src="/images/close_history.png" alt="close-history-icon"/>
          </div>
        </div>
      </div>
      <div className={styles.detail_body}>
        {runs && runs.map((run) => (<div key={run.id} onClick={() => setSelectedRun(run)} className={styles.history_box} style={selectedRun === run ? {background:'#474255'} : {background:'#272335'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'10px'}}>
            <div style={{display:'flex',order:'0'}}>
              {run.status === 'RUNNING' && <div><Image width={14} height={14} style={{mixBlendMode: 'exclusion'}} src="/images/loading.gif" alt="loading-icon"/></div>}
              <div style={run.status === 'RUNNING' ? {marginLeft:'7px'} : {}}>{run.name}</div>
            </div>
            {/*{run.notification_count > 0 && <div className={styles.notification_bubble}>{run.notification_count}</div>}*/}
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
            {/*<div style={{display:'flex',alignItems:'center'}}>*/}
            {/*  <div>*/}
            {/*    <Image width={12} height={12} src="/images/call_made.png" alt="call-icon"/>*/}
            {/*  </div>*/}
            {/*  <div className={styles.history_info}>*/}
            {/*    {run.calls} Calls*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>*/}
            <div style={{display:'flex',alignItems:'center'}}>
              <div>
                <Image width={12} height={12} src="/images/schedule.png" alt="schedule-icon"/>
              </div>
              <div className={styles.history_info}>
                {formatTime(run.last_execution_time)}
              </div>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  </>)
}