interface IClassroom {
    id: number;
    label: string;
    teacher_id: number;
    student_ids: [number];
    room_ids: [number];
}

export default IClassroom;
