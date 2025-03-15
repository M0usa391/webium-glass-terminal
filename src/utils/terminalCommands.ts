
// Terminal command processor and data

export interface CommandResponse {
  text: string;
  isHtml?: boolean;
  isError?: boolean;
}

interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => CommandResponse;
}

// About info
const aboutInfo = `
تيكنولوجي تيم هو فريق متخصص في تطوير الويب والذكاء الاصطناعي،
نقدم حلولًا مبتكرة ومتقدمة تلبي احتياجات العملاء.
نحن نجمع بين المهارات التقنية والإبداعية لتحقيق نتائج متميزة.
`;

// Developer info
const devInfo = `
<div class="space-y-2">
  <p><span class="text-blue-400">إسم المطور:</span> Bn0mar</p>
  <p><span class="text-blue-400">التخصص:</span> مطور واجهات أمامية</p>
  <p><span class="text-blue-400">المهارات:</span></p>
  <ul class="list-disc pl-6 space-y-1">
    <li>HTML, CSS, JavaScript</li>
    <li>React, Vue, Angular</li>
    <li>Tailwind CSS, Bootstrap</li>
    <li>TypeScript</li>
    <li>Node.js</li>
  </ul>
</div>
`;

// Services info
const servicesInfo = `
<div class="space-y-2">
  <p class="font-bold">الخدمات التي نقدمها:</p>
  <ul class="list-disc pl-6 space-y-1">
    <li>تطوير مواقع الويب المتجاوبة</li>
    <li>تطوير تطبيقات الويب</li>
    <li>تطوير واجهات المستخدم</li>
    <li>حلول الذكاء الاصطناعي</li>
    <li>تحسين محركات البحث (SEO)</li>
    <li>استشارات تقنية</li>
  </ul>
</div>
`;

// Available commands
export const commands: Record<string, Command> = {
  help: {
    name: 'help',
    description: 'عرض قائمة الأوامر المتاحة',
    execute: (args) => {
      if (args.length > 0) {
        const commandName = args[0];
        const command = commands[commandName];
        
        if (command) {
          return {
            text: `${command.name}: ${command.description}`,
          };
        } else {
          return {
            text: `الأمر '${commandName}' غير موجود. اكتب 'help' لمعرفة الأوامر المتاحة.`,
            isError: true,
          };
        }
      }
      
      const commandsList = Object.values(commands)
        .map(cmd => `${cmd.name} - ${cmd.description}`)
        .join('\n');
      
      return {
        text: `الأوامر المتاحة:\n\n${commandsList}\n\nاكتب 'help [command]' لمزيد من المعلومات حول أمر معين.`,
      };
    },
  },
  
  about: {
    name: 'about',
    description: 'معلومات عن تيكنولوجي تيم',
    execute: () => ({
      text: aboutInfo,
    }),
  },
  
  dev: {
    name: 'dev',
    description: 'معلومات عن المطور',
    execute: () => ({
      text: devInfo,
      isHtml: true,
    }),
  },
  
  services: {
    name: 'services',
    description: 'عرض خدماتنا',
    execute: () => ({
      text: servicesInfo,
      isHtml: true,
    }),
  },
  
  clear: {
    name: 'clear',
    description: 'مسح شاشة الطرفية',
    execute: () => ({
      text: '[[CLEAR]]', // Special command to clear the terminal
    }),
  },
  
  echo: {
    name: 'echo',
    description: 'طباعة نص',
    execute: (args) => ({
      text: args.join(' '),
    }),
  },
  
  date: {
    name: 'date',
    description: 'عرض التاريخ والوقت الحالي',
    execute: () => ({
      text: new Date().toLocaleString('ar-SA'),
    }),
  },
};

export const processCommand = (input: string): CommandResponse => {
  const trimmedInput = input.trim();
  
  if (!trimmedInput) {
    return { text: '' };
  }
  
  const args = trimmedInput.split(' ');
  const commandName = args.shift()?.toLowerCase() || '';
  
  if (commands[commandName]) {
    return commands[commandName].execute(args);
  }
  
  return {
    text: `الأمر '${commandName}' غير معروف. اكتب 'help' لمعرفة الأوامر المتاحة.`,
    isError: true,
  };
};
