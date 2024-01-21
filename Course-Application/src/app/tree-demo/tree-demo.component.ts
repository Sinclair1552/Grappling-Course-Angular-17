import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';

interface CourseNode {
  name: string;
  children?: CourseNode[];
}

interface CourseFlatNode {
    name:string;
    expandable:boolean;
    level: number;
}


const TREE_DATA: CourseNode[] = [
  {
    name: 'Jui Jitsu Material',
    children: [
      {
        name: 'Hand Placement',
        children: [
          {
            name: 'How to set up a Guillotine Choke with a take down'
          },
          {
            name: 'How to set a Guillotine Choke from Standing up'
          }
        ],
      },
      {
        name: 'Advanced Jui Jitsu Material',
        children: [
          
        ],
      },
    ],
  },
];

@Component({
  selector: 'tree-demo',
  templateUrl: 'tree-demo.component.html',
  styleUrls: ['tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit {

  // Nested Tree
  nestedDataSource = new MatTreeNestedDataSource<CourseNode>();

  nestedTreeControl = new NestedTreeControl<CourseNode>(node => node.children);

  // Flat Tree
  flatTreeControl = new FlatTreeControl<CourseFlatNode>(
      node => node.level,
      node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
      (node:CourseNode, level: number): CourseFlatNode => {
          return {
              name: node.name,
              expandable: node.children?.length > 0,
              level
          }
      },
      node => node.level,
      node => node.expandable,
      node => node.children
  );

  flatDataSource = new MatTreeFlatDataSource(this.flatTreeControl, this.treeFlattener);



  ngOnInit() {

      this.nestedDataSource.data = TREE_DATA;

      this.flatDataSource.data = TREE_DATA;

  }

    hasNestedChild(index: number, node:CourseNode) {
      return node?.children?.length > 0;
    }

    hasFlatChild(index: number, node:CourseFlatNode) {
      return node.expandable;
    }

}


