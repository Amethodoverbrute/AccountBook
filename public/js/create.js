// 添加记录页面的JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addRecordForm');
    const timeInput = document.getElementById('time');
    
    // 设置默认时间为当前时间
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 16);
    timeInput.value = formattedDate;
    
    // 表单提交事件处理
    form.addEventListener('submit', function(e) {
        // 基本验证
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        
        // 可以在这里添加额外的验证逻辑
        const amount = parseFloat(document.getElementById('amount').value);
        if (amount <= 0) {
            e.preventDefault();
            alert('金额必须大于0');
            return;
        }
        
        // 可以添加确认提示
        if (confirm('确定要添加这条记录吗？')) {
            // 表单会继续提交
        } else {
            e.preventDefault();
        }
    });
    
    // 实时验证金额输入
    const amountInput = document.getElementById('amount');
    amountInput.addEventListener('input', function() {
        const value = this.value;
        // 只允许数字和小数点
        this.value = value.replace(/[^\d.]/g, '');
        // 确保只有一个小数点
        const parts = this.value.split('.');
        if (parts.length > 2) {
            this.value = parts[0] + '.' + parts.slice(1).join('');
        }
        // 限制小数位数为两位
        if (parts[1] && parts[1].length > 2) {
            this.value = parts[0] + '.' + parts[1].slice(0, 2);
        }
    });
    
    // 事项输入自动大写首字母
    const itemInput = document.getElementById('item');
    itemInput.addEventListener('input', function() {
        const value = this.value;
        if (value.length > 0) {
            this.value = value.charAt(0).toUpperCase() + value.slice(1);
        }
    });
    
    // 类型选择变化时的处理
    const typeSelect = document.getElementById('type');
    typeSelect.addEventListener('change', function() {
        const selectedType = this.value;
        const amountLabel = document.querySelector('label[for="amount"]');
        
        if (selectedType === '收入') {
            amountLabel.textContent = '金额（收入）';
        } else {
            amountLabel.textContent = '金额（支出）';
        }
    });
});