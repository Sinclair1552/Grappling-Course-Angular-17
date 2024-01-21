import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Lesson} from '../model/lesson';


@Component({
  selector: 'drag-drop-example',
  templateUrl: "drag-drop.component.html",
  styleUrls: ["drag-drop.component.scss"]
})
export class DragDropComponent {

  lessons = [
    {
      id: 120,
      'description': 'Hand Placement',
      'duration': '4:17',
      'seqNo': 1,
      courseId: 11
    },
    {
      id: 121,
      'description': 'How to set up a Guillotine Choke while standing',
      'duration': '6:37',
      'seqNo': 2,
      courseId: 11
    },
    {
      id: 122,
      'description': 'Guillotine Choke from Open Guard',
      'duration': '8:03',
      'seqNo': 3,
      courseId: 11
    },
    {
      id: 123,
      'description': 'Leg Placement',
      'duration': '11:46',
      'seqNo': 4,
      courseId: 11
    },

    
   
    
   
   
  ];

  done = [];

    dropMultiList(event: CdkDragDrop<Lesson[]>) {

        if (event.previousContainer == event.container) {
            moveItemInArray(this.lessons, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex

            );
        }

    }


    drop(event: CdkDragDrop<Lesson[]>) {

        console.log("previousIndex = ", event.previousIndex);

        console.log("currentIndex = " + event.currentIndex);

        moveItemInArray(this.lessons, event.previousIndex, event.currentIndex);

    }
}
