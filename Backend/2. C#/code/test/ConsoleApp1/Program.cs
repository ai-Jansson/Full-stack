//// 学生类
//public class Student
//{
//    public string Name { get; set; }
//    public int Age { get; set; }
//    public string StudentId { get; set; }

//    public Student(string name, int age, string studentId)
//    {
//        Name = name;
//        Age = age;
//        StudentId = studentId;
//    }

//    public override string ToString()
//    {
//        return $"学生信息 - 姓名：{Name}, 年龄：{Age}, 学号：{StudentId}";
//    }
//}

//// 学生列表类
//public class StudentList
//{
//    private Student[] students;
//    private int capacity;
//    private int count;

//    public StudentList(int capacity = 100)
//    {
//        this.capacity = capacity;
//        students = new Student[capacity];
//        count = 0;
//    }

//    // 索引器
//    public Student this[int index]
//    {
//        get
//        {
//            if (index < 0 || index >= capacity)
//                throw new IndexOutOfRangeException("索引超出范围");
//            return students[index];
//        }
//        set
//        {
//            if (index < 0 || index >= capacity)
//                throw new IndexOutOfRangeException("索引超出范围");
//            students[index] = value;
//            if (index >= count) count = index + 1;
//        }
//    }

//    // 获取学生数量
//    public int Count
//    {
//        get { return count; }
//    }

//    // 添加学生
//    public void Add(Student student)
//    {
//        if (count >= capacity)
//            throw new Exception("学生列表已满");

//        students[count++] = student;
//    }

//    // 根据学号查找学生
//    public Student FindByStudentId(string studentId)
//    {
//        for (int i = 0; i < count; i++)
//        {
//            if (students[i]?.StudentId == studentId)
//                return students[i];
//        }
//        return null;
//    }
//}

//// 使用示例
//class Program
//{
//    static void Main(string[] args)
//    {
//        // 创建学生列表
//        StudentList list = new StudentList();

//        // 使用索引器添加学生
//        list[0] = new Student("张三", 18, "001");
//        list[1] = new Student("李四", 19, "002");

//        // 使用Add方法添加学生
//        list.Add(new Student("王五", 20, "003"));

//        // 遍历显示所有学生
//        for (int i = 0; i < list.Count; i++)
//        {
//            Console.WriteLine(list[i]);
//        }

//        // 查找学生
//        Student student = list.FindByStudentId("002");
//        if (student != null)
//        {
//            Console.WriteLine("\n查找结果：");
//            Console.WriteLine(student);
//        }

//        // 修改学生信息
//        list[1] = new Student("李四修改", 20, "002");
//        Console.WriteLine("\n修改后的信息：");
//        Console.WriteLine(list[1]);
//    }
//}

struct user
{
    public static string name;
    public static int age;
    
    static user()
    {
        name = "jansson";
          age = 18;
    }
}

class client
{
    static void Main()
    {
        Console.WriteLine($"{user.name},{user.age}");
    }
}


