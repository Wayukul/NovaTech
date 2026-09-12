// ฐานข้อมูลคอร์สอบรม 6 รายการ
    const trainingData = {
      1: {
        badge: "Cloud Architecture",
        title: "Modern Cloud Infrastructure & DevOps",
        schedule: "วันที่อบรม: 25-26 กันยายน 2026 (09:00 - 16:30 น.)",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        desc: "หลักสูตรนี้จัดขึ้นเพื่อพัฒนาความรู้ความสามารถในการวางโครงสร้างพื้นฐานบน Cloud ให้มีความเสถียร รองรับการขยายตัว และนำแนวคิด DevOps มาใช้จริงในโปรเจกต์งาน",
        topics: [
          "Infrastructure as Code (IaC) ด้วย Terraform",
          "Container Orchestration ด้วย Kubernetes (K8s)",
          "การตั้งค่า CI/CD Automation Pipeline ด้วย GitHub Actions",
          "Observability & Monitoring สำหรับระบบ Cloud-Native"
        ]
      },
      2: {
        badge: "Artificial Intelligence",
        title: "Generative AI & LLM for Business Applications",
        schedule: "วันที่อบรม: 02 ตุลาคม 2026 (09:00 - 16:30 น.)",
        image: "https://kanerika.com/wp-content/uploads/2024/04/generative-ai-vs.-llm.webp",
        desc: "เวิร์กชอปที่เจาะลึกการนำเทคโนโลยี Large Language Models (LLMs) เข้ามาเชื่อมต่อกับซอฟต์แวร์และการดำเนินงานเพื่อยกระดับประสิทธิภาพขององค์กร",
        topics: [
          "Prompt Engineering ขั้นสูงสำหรับการทำงานเฉพาะทาง",
          "การทำ Retrieval-Augmented Generation (RAG) กับเอกสารภายใน",
          "การเชื่อมต่อ API ของ AI Model และเรื่อง Data Privacy",
          "Case Study การประยุกต์ใช้ AI ในผลิตภัณฑ์จริง"
        ]
      },
      3: {
        badge: "Cybersecurity",
        title: "Web Security & Penetration Testing Essentials",
        schedule: "วันที่อบรม: 15-17 ตุลาคม 2026 (09:00 - 17:00 น.)",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
        desc: "เพิ่มพูนทักษะด้านความปลอดภัยเพื่อปกป้องระบบเว็บแอปพลิเคชันจากภัยคุกคามทางอินเทอร์เน็ต ผ่านการจำลองและทดสอบการเจาะระบบ (Lab Hands-on)",
        topics: [
          "OWASP Top 10 Web Application Vulnerabilities",
          "เทคนิค Authentication & Session Hijacking Prevention",
          "การใช้งานเครื่องมือ Security Testing เช่น Burp Suite",
          "การเขียนโค้ดอย่างปลอดภัย (Secure Coding Guidelines)"
        ]
      },
      4: {
        badge: "Data Engineering",
        title: "Building Scalable Data Pipelines with Python & Spark",
        schedule: "วันที่อบรม: 28-29 ตุลาคม 2026 (09:00 - 16:30 น.)",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        desc: "เรียนรู้การวางท่อส่งข้อมูล (Data Pipeline) สำหรับ Big Data ขนาดใหญ่ พร้อมการประมวลผลแบบ Batch และ Real-Time",
        topics: [
          "พื้นฐาน Apache Spark และ PySpark Architecture",
          "การออกแบบ Data Lakehouse และ Data Warehouse",
          "การจัดการ Data Workflow ด้วย Apache Airflow",
          "Data Quality Management และ Error Handling"
        ]
      },
      5: {
        badge: "Frontend Development",
        title: "Next.js 15 & Modern UI System Masterclass",
        schedule: "วันที่อบรม: 08-09 พฤศจิกายน 2026 (09:00 - 16:30 น.)",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
        desc: "อัปเดตฟีเจอร์ล่าสุดของ Frontend ยุคใหม่ เจาะลึก Next.js และการสร้างระบบดีไซน์คอมโพเนนต์ที่นำไปใช้ซ้ำได้อย่างยั่งยืน",
        topics: [
          "React Server Components & Server Actions",
          "การจัดการ State และ Data Fetching อย่างมีประสิทธิภาพ",
          "Design Token และการสร้าง Reusable UI Library",
          "Web Performance Optimization (Core Web Vitals)"
        ]
      },
      6: {
        badge: "Agile & Leadership",
        title: "Agile Product Management & Tech Leadership",
        schedule: "วันที่อบรม: 20 พฤศจิกายน 2026 (09:00 - 16:30 น.)",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        desc: "หลักสูตรพัฒนาภาวะผู้นำและกรอบความคิด Agile สำหรับหัวหน้าทีมและ Product Manager ยุคใหม่",
        topics: [
          "การสร้าง Alignment ร่วมกันระหว่าง Business และ Tech Team",
          "Effective Sprint Planning และ Backlog Refinement",
          "การประเมิน Impact และ Metric เชิงธุรกิจ (OKRs & KPIs)",
          "การโค้ชและสนับสนุนทีมเพื่อประสิทธิภาพสูงสุด (High Performing Team)"
        ]
      }
    };

    // ดึง Parameter id จาก URL
    const urlParams = new URLSearchParams(window.location.search);
    const trainingId = urlParams.get('id') || 1;
    const current = trainingData[trainingId] || trainingData[1];

    // แสดงผลข้อมูลลงในหน้าเว็บ
    document.getElementById('training-category').innerText = current.badge.toUpperCase();
    document.getElementById('training-title').innerText = current.title;
    document.getElementById('training-h2').innerText = current.title;
    document.getElementById('training-badge').innerText = current.badge;
    document.getElementById('training-schedule').innerText = current.schedule;
    document.getElementById('training-desc').innerText = current.desc;
    document.getElementById('training-img').src = current.image;

    const topicList = document.getElementById('training-topics');
    topicList.innerHTML = current.topics.map(t => `<li>${t}</li>`).join('');

    // ควบคุม Modal แจ้งเตือน
    const modal = document.getElementById('modal-alert');
    const registerBtn = document.getElementById('btn-register');
    const closeModalBtn = document.getElementById('btn-close-modal');

    registerBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });