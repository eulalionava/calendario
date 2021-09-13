import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment);


export const CalendarScreen = ()=>{

    const dispatch =  useDispatch();

    //Extrear el store
    const { events,activeEvent } =  useSelector(state=>state.calendar);
    const{ uid } =  useSelector(state=>state.auth);

    const[lastView,setLastView] = useState(localStorage.getItem('lastView') || 'month');

    //llamados de todo los eventos
    useEffect( ()=>{
        dispatch( eventStartLoading() );

    },[dispatch]);

    const handDobleClick = (e)=>{
        dispatch( uiOpenModal() );    
    }

    const handSeletedEvent = (e)=>{
       dispatch( eventSetActive(e) );

    }

    const onViewChange = (e)=>{
        setLastView(e);
        localStorage.setItem('lastView',e);
    }
     const onSelectSlot = (e)=>{
         dispatch( eventClearActiveEvent() );
     }

    const evenStyleGetter = (event,start,end,isSelected)=>{

        const stye = {
            backgroundColor:(uid === event.user._id ) ? '#367CF7':'#465660',
            display:'block',
            opacity:0.8,
            color:'white'
        }

        return {stye};
    }

    return(
        <div>
            <Navbar/>

            <Calendar className="calendar-screen"
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 } }
                messages={ messages }
                eventPropGetter={ evenStyleGetter }
                onDoubleClickEvent={ handDobleClick }
                onSelectEvent={ handSeletedEvent }
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                onView={ onViewChange }
                view={ lastView }
                components={{
                        event: CalendarEvent
                    }
                }
            />

            <AddNewFab/>
            { (activeEvent) && <DeleteEventFab/>}
            <CalendarModal/>
        </div>
    )
}